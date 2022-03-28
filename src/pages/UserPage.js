//import Library
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

//import Actions
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";
//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

//import Icon

// impot Component
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import Post from "../components/Post";
import BookmarkPost from "../components/BookmarkPost";




const UserPage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    const myKey = _user.user.userKey;
    const pageUserKey = parseInt(useParams().userKey);
    const pageUser=_post.userPostList

    if(pageUserKey !== pageUser.userKey){
        dispatch(postActions.userPost(pageUserKey));
    }
    React.useEffect(()=>{
        dispatch(postActions.userPost(pageUserKey));
        dispatch(postActions.userBookmark());
        dispatch(postActions.likePostList());
    },[])
    

    const [index,setIndex] = React.useState(1);

    const logout= () => {
        dispatch(userActions.logout());
    }

    return (
    <Grid wrap>
            <Header isUserPage mine={myKey === pageUserKey} userKey={pageUserKey} UserName={pageUser.nickname?pageUser.nickname:''}/>
            <Grid position='relative' is_flex flexDirection='column' alignItems='center' width="100%" padding="0" marginTop="80px">
                {myKey === pageUserKey?<Button onClick={logout} fontSize='12px' theme='unfilled' width='60px' height='30px' right='20px' position='absolute'>로그아웃</Button>:''}
                <Image is_circle size='100' src={pageUser.userProfileImage?pageUser.userProfileImage:''}/>
    
                {/* <Text margin="5px 5px 0px 5px" fontSize="12px">
                    [호칭]
                </Text> */}

                <Text margin="5px 5px 0px 5px" fontSize="24px">
                    {pageUser.nickname?pageUser.nickname:''}
                </Text>

                <Text margin="10px" fontSize="12px">
                    {pageUser.introduction?pageUser.introduction:''}
                </Text>

                {myKey === pageUserKey?
                <>
                <Grid borderBottom='1px solid black' marginTop='10px' is_flex width='100%'>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(1)}><Text fontSize='14px' fontWeight='500' >참여작</Text></Grid>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(2)}><Text>북마크한 작품</Text></Grid>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(3)}><Text>좋아요한 작품</Text></Grid>
                </Grid> 
                <Grid marginTop='-3px' borderRadius='1px' width="34%" height='1px' borderTop='3px solid black' transform={'translate(' + (- 2 + index)*100 + '%)'} transition='transform 0.5s ease 0.1s'/>
                </>
                :
                <>
                <Grid borderBottom='1px solid black' marginTop='10px' justifyContent='center' is_flex width='100%'>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(1)}><Text fontSize='14px' fontWeight='500' >참여작</Text></Grid>
                </Grid> 
                </>
                }


                
                <Grid is_flex width='300%' overflow='hidden' height='250px' justifyContent='space-around' transform={'translate(' + (2 - index) * (1 / 3) * 100 + '%)'} transition='transform 0.5s ease 0.1s'>
                    <Grid is_flex flexDirection='column' alignItems='center' width="30%" marginTop='32px' gap='24px'>
                        {pageUser.postResponseDtoList?pageUser.postResponseDtoList.map((v,i)=>{
                            const likeThis= v.postLikeClickersResponseDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            const markThis= v.bookmarkClickUserKeyResDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            return (
                                <Post bookmarkLikesCnt={v.bookmarkLikesCnt} key={i} category={v.categoryList} postKey={v.postKey} isMark={markThis} isLike={likeThis} first={v.paragraphResList[0].paragraph} like={v.postLikesCnt} title={v.title} url={v.postImageUrl}/>
                            )
                        }):''}
                    </Grid>
                    <Grid is_flex alignItems='center' width="30%" flexWrap='wrap' marginTop='32px' height='100px' gap='5px'>
                        {_post.bookmarkList?_post.bookmarkList.map((v,i)=>{
                            return (
                                <BookmarkPost key={i} category={v.categoryResponseDtoList} postKey={v.postKey} title={v.post.title} url={v.post.postImageUrl}/>
                            )
                        }):''}
                    </Grid>
                    <Grid is_flex alignItems='center' width="30%" flexWrap='wrap' marginTop='32px' height='100px' gap='5px'>
                        {_post.likeList?_post.likeList.map((v,i)=>{
                            return (
                                <BookmarkPost key={i} category={v.categoryList} postKey={v.postKey} title={v.title} url={v.postImageUrl}/>
                            )
                        }):''}
                    </Grid>
                </Grid>
            </Grid>
            <Grid height='100px'/>
            <Bottom thisPage="myPage" />
        </Grid>
    );
};

export default UserPage;

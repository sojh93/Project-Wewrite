    //import Library
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import SwitchSelector from "react-switch-selector";

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

import instance from "../shared/Request";
import { set } from "lodash";
import { setUseProxies } from "immer";


const UserPage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    const myKey = _user.user.userKey;
    const pageUserKey = useParams().userKey;
    const pageUser=_post.userPostList
    // const [pageUser,setPageUser] = React.useState(false)
    console.log(pageUser);
    React.useEffect(()=>{
        dispatch(postActions.userPost(pageUserKey));
    },[])
    

    const [index,setIndex] = React.useState(1);



    return (
    <Grid wrap>
            <Header isUserPage userKey={pageUserKey} UserName={pageUser.nickname?pageUser.nickname:''}/>
            <Grid is_flex flexDirection='column' alignItems='center' width="100%" padding="0" marginTop="80px">
                
                <Image is_circle size='100' src={pageUser.userProfileImage?pageUser.userProfileImage:''}/>
    
                <Text margin="5px 5px 0px 5px" fontSize="12px">
                    [호칭]
                </Text>

                <Text margin="5px 5px 0px 5px" fontSize="24px">
                    {pageUser.nickname?pageUser.nickname:''}
                </Text>

                <Text margin="10px" fontSize="12px">
                    {pageUser.introduction?pageUser.introduction:''}
                </Text>

                <Grid borderBottom='1px solid black' marginTop='10px' is_flex width='100%'>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(1)}><Text fontSize='14px' fontWeight='500' >내 참여작</Text></Grid>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(2)}><Text>북마크한 작품</Text></Grid>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(3)}><Text>좋아요한 작품</Text></Grid>
                </Grid> 
                <Grid marginTop='-3px' borderRadius='1px' width="34%" height='1px' borderTop='3px solid black' transform={'translate(' + (- 2 + index)*100 + '%)'} transition='transform 0.5s ease 0.1s'/>

                <Grid is_flex width='290%' justifyContent='space-between' transform={'translate(' + (2 - index)*33 + '%)'} transition='transform 0.5s ease 0.1s'>
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
                </Grid>
            </Grid>
            <Grid height='100px'/>
            <Bottom thisPage="myPage" />
        </Grid>
    );
};

export default UserPage;

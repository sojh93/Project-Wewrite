//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import SwitchSelector from "react-switch-selector";

//import Actions
import { actionCreators as postActions } from "../redux/modules/post";


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Post from '../components/Post';




function PostList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const listType = useParams().listType;
    console.log(listType);

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    console.log(_post);

    const [kind, setKind] = React.useState('recent');


    React.useEffect(() => {
        dispatch(postActions.getRecent());
        dispatch(postActions.getRecommend());
        dispatch(postActions.getAll());
    }, []);
    


    return (
        <Grid wrap>
            <Header/>
            <Grid is_flex marginTop='70px' width="100%" flexDirection="column" alignItems="center">
            <Grid width='100%' is_flex justifyContent='space-between'>
                <Grid width='100%'><Text margin='0 0 -15px 20px'  fontSize='24px' fontWeight='700'>#{listType === 'all' ? '참여 가능 작품' : ''}{listType === 'recent' ? '완결 작품':''}</Text></Grid>
                {listType === 'recent'?
                <Grid is_flex margin='10px 10px 0 10px'>
                    <Text onClick={()=>setKind('recent')} fontSize='12px' color={kind==='recent'?"#000000":"#E0E0E0"}>최신순</Text>
                    <Text onClick={()=>setKind('recommend')} fontSize='12px' color={kind==='recommend'?"#000000":"#E0E0E0"}>좋아요순</Text>
                </Grid>:''}
                
            </Grid>
            <Grid is_flex flexDirection='column' alignItems='center' width="90%" marginTop='32px' gap='24px'>
                    {/* //Recent// */}
                    {_post.recentPostList && listType === 'recent'?kind==='recent'?_post.recentPostList.map((v,i)=>{
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
                    }):
                    _post.recommendPostList.map((v,i)=>{
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
                    {/* //All// */}
                    {_post.allPostList && listType === 'all'?_post.allPostList.map((v,i)=>{
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
            <Grid height='100px' width='2px'/>
            <Bottom  thisPage="postList"/>
        </Grid>

    );
}


export default PostList;
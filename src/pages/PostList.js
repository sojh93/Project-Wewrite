//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
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

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    console.log(_post);


    React.useEffect(() => {
        dispatch(postActions.getRecent())
    }, []);
    

    return (
        <Grid wrap>
            <Header/>
            <Grid is_flex height="500px" marginTop='70px' width="100%" flexDirection="column" alignItems="center">
            <Grid width='100%'><Text fontSize='24px' fontWeight='700'>#완결 작품</Text></Grid>
            <Grid is_flex flexDirection='column' alignItems='center' width="90%" marginTop='32px' gap='24px'>
                    {_post.recentPostList?_post.recentPostList.map((v,i)=>{
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


            <Bottom thisPage="postList"/>
        </Grid>

    );
}


export default PostList;
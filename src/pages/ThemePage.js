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




function ThemePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const theme = useParams().theme;
    console.log(theme);

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    console.log(_post);


    React.useEffect(() => {
        dispatch(postActions.getTheme(theme))
    }, []);
    


    return (
        <Grid wrap>
            <Header/>
            <Grid is_flex marginTop='70px' width="100%" flexDirection="column" alignItems="center">
            <Grid width='100%'><Text marginBottom='-15px' fontSize='24px' fontWeight='700'>#{theme}</Text></Grid>
            <Grid is_flex flexDirection='column' alignItems='center' width="90%" marginTop='32px' gap='24px'>
                    {_post.themePostList?_post.themePostList.map((v,i)=>{
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


export default ThemePage;
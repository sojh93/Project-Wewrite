//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI


//import Icon
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


//import elements
import { Button, Grid, Input, Image, Text,Chip } from "../elements" 

//import Actions
import { actionCreators as postActions } from '../redux/modules/post';

const Post = React.memo((props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const charLimit = (text, limit) =>{
        if(text.length > limit){
            return text.slice(0,limit)+' ...'
        }
        return text.slice(0,limit)
    }

    const likePost = () =>{
        dispatch(postActions.likePost(props.postKey));
        console.log('done');
    }
    const navigatePost = () => {
        navigate(`/postdetail/${props.postKey}`);
    }
    const markPost =() =>{
        dispatch(postActions.markPost(props.postKey));
        console.log('done');
    }

    return (
        <Grid is_flex width='100%' flexDirection='column'>
            <Grid is_flex justifyContent='space-between' width="100%" gap='10px'>
                <Grid onClick={navigatePost} width='80px' is_flex flexDirection='column'>
                    <Image boxSizing='border-box' border='1px solid #e0e0e0' width="130px" height="150px" borderRadius="5px" src={props.url?props.url:''}/>
                </Grid>
                <Grid is_flex flexDirection="column" width="calc(100% - 130px)" justifyContent='flex-start'>
                    <Text onClick={navigatePost} margin='0 10px' fontSize="16px" fontWeight='700'>{props.title?props.title:''}</Text>
                    <Grid margin='5px 10px' is_flex flexDirection='column' height='50px' justifyContent='space-between'>
                        <Grid>
                            {props.category?props.category.map((v,i)=>{
                                return (<Chip margin='0 5px 0 0' key={i}>{v.category}</Chip>)
                            }):''}
                        </Grid>
                        <Grid is_flex fontSize='15px' color='#7E7E7E' fontWeight='300'>
                            <Image onClick={likePost} width='20px' height='20px' margin='4px' src={props.isLike?'/Icon/thumbs-up-filled.png':'/Icon/thumbs-up.png'}/>   
                            <Text>{props.like?props.like:'0'}</Text>
                            <Image width='14px' onClick={markPost} height='18px' margin='6px' src={props.isMark?'/Icon/bookmark_filled.png':'/Icon/bookmark.png'}/>
                            <Text>{props.bookmarkLikesCnt}</Text>
                        </Grid>
                    </Grid>
                    <Grid onClick={navigatePost} margin='0 10px'>
                        <Text height='70px' fontSize="12px" margin="0px">
                            {props.first?charLimit(props.first,60):''}
                        </Text>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    );
})

export default Post;

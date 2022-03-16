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

export default function Post(props) {
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

    return (
        <Grid is_flex width='100%' flexDirection='column'>
            <Grid is_flex justifyContent='space-between' width="100%" gap='10px'>
                <Grid onClick={navigatePost} width='80px' is_flex flexDirection='column'>
                    <Image width="130px" height="150px" borderRadius="5px" src={props.url?props.url:''}/>
                </Grid>
                <Grid is_flex flexDirection="column" width="calc(100% - 130px)" justifyContent='flex-start'>
                    <Text onClick={navigatePost} margin='0 10px' fontSize="16px" fontWeight='700'>{props.title?props.title:''}</Text>
                    <Grid margin='5px 10px' is_flex flexDirection='column' height='50px' justifyContent='space-between'>
                        <Grid>
                            {props.category?props.category.map((v,i)=>{
                                return (<Chip key={i}>{v.category}</Chip>)
                            }):''}
                        </Grid>
                        <Grid is_flex fontSize='15px' color='#7E7E7E' fontWeight='300'>
                            {props.isLike?<Image onClick={likePost} width='20px' height='20px' margin='4px' src='/Icon/thumbs-up-filled.png'/>:<Image onClick={likePost} width='20px' height='20px' margin='4px' src='/Icon/thumbs-up.png'/>}
                            <Text>{props.like?props.like:'0'}</Text>
                            <Image width='12.5px' height='16px' margin='6px' src='/Icon/bookmark.png'/>
                            <Text>???</Text>
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
} 


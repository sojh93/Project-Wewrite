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

export default function BookmarkPost(props) {
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
        <Grid onClick={()=>{navigate(`/postdetail/${props.postKey}`)}} width={'calc((100% - 10px) / 3)'} is_flex flexDirection='column' alignItems='center'>
            <Image onClick={props.onClick} border='1px solid #C4C4C4' boxSizing ='border-box' borderRadius='5px' width='100%' height='150px' src={props.url}/>

            <Grid onClick={props.onClick} width='100%' height='26px' is_flex alignItems='flex-start'>
                <Text margin='3px' width='auto' fontSize='16px' color='black'>
                    {charLimit(props.title,8)}
                    </Text>
            </Grid>
            <Grid margin='2px' marginTop='5px' width='100%' is_flex alignItems='flex-start'>
                {props.category?props.category.map((v,i)=>{
                    if(i===1){
                        if(props.category[0].category === v.category){
                            return;
                        }
                    } 
                    return (
                        <Chip marginRight='5px' key={i}>{v.category}</Chip>
                    )
                }):""}
            </Grid>
        </Grid>
    );
} 


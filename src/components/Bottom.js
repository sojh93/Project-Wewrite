//import Lidrary
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//import Icon
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { BiPlus } from "react-icons/bi";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Actions
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';

export default function Bottom(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    // console.log(_user);
    // console.log(_post);
    React.useEffect(()=>{

    },[])

    const addBtn=()=>{
        console.log('push!');
        dispatch(postActions.getAll());
    }

    return (
        <Grid zIndex='9' position="absolute" bottom="0px" borderRadius="10px 10px 0 0" >
            <Grid is_flex backgroundColor='#F9FAFB' borderRadius="10px 10px 0 0" alignItems="center" color='#7E7E7E' justifyContent="space-around" width="100vw" minWidth ="360px" maxWidth ="390px" height='60px'>
                {props.thisPage==="main"?       <Text><WidgetsIcon /></Text>              : <Text onClick={()=>navigate('/')}><WidgetsOutlinedIcon/></Text>}
                {props.thisPage==="book"?       <Text><BookmarkOutlinedIcon/></Text>      : <Text><BookmarkBorderOutlinedIcon/></Text>}
                <Grid marginBottom='45px' width='60px' height='60px' borderRadius='30px' backgroundColor='#6454FF' is_flex alignItems='center' justifyContent='center' fontSize='40px'>
                    <Text color='white'  margin='0' height='53px' onClick={()=>navigate('/write')}><BiPlus/></Text>
                </Grid>
                {props.thisPage==="postList"?   <Text><HomeIcon/></Text>                  : <Text onClick={()=>navigate('/postlist')}><HomeOutlinedIcon/></Text>}
                
                {props.thisPage==="userPage"?     <Text><PersonIcon/></Text>: _user.is_login? <Text onClick={()=>navigate(`/userpage/${_user.user.userKey}`)}><PersonOutlineOutlinedIcon/></Text> :<Text onClick={()=>navigate('/login')}><PersonOutlineOutlinedIcon/></Text>}
            </Grid>
        </Grid>
    );
} 


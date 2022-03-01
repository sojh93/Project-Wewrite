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

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

export default function Bottom(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    
    const homeBtn=()=>{
        navigate('/postList');
    }

    return (
        <Grid position="absolute" bottom="0px">
            <Grid is_flex alignItems="center" justifyContent="space-around" width="320px" >
                {props.thisPage==="main"?       <Text><WidgetsIcon/></Text>             : <Text onClick={()=>navigate('/')}><WidgetsOutlinedIcon/></Text>}
                {props.thisPage==="book"?       <Text><BookmarkOutlinedIcon/></Text>    : <Text><BookmarkBorderOutlinedIcon/></Text>}
                {props.thisPage==="add"?        <Text><AddCircleOutlinedIcon/></Text>   : <Text><AddCircleOutlineOutlinedIcon/></Text>}
                {props.thisPage==="postList"?   <Text><HomeIcon/></Text>                : <Text onClick={()=>navigate('/postlist')}><HomeOutlinedIcon/></Text>}
                {props.thisPage==="myPage"?   <Text><PersonIcon/></Text>              : <Text onClick={()=>navigate('/mypage')}><PersonOutlineOutlinedIcon/></Text>}
            </Grid>
        </Grid>
    );
} 


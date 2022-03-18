//import Lidrary
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import { BiPlus } from "react-icons/bi";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

export default function Bottom(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    // console.log(_user);
    React.useEffect(()=>{

    },[])


    return (
        <Grid zIndex='9' position="absolute" bottom="0px" borderRadius="10px 10px 0 0" >
            <Grid is_flex backgroundColor='#F9FAFB' borderRadius="10px 10px 0 0" alignItems="center" color='#7E7E7E' justifyContent="space-around" width="100vw" minWidth ="360px" maxWidth ="390px" height='60px'>
                <Grid is_flex justifyContent='center' backgroundColor='#F9FAFB' width='50px'>{props.thisPage==="main"?       <Image width='25px' height='40px' src='/Icon/Main.png'/>             : <Image onClick={()=>navigate('/')} width='25px' height='40px' src='/Icon/Main.png'/>}</Grid>
                <Grid is_flex justifyContent='center'  backgroundColor='#F9FAFB' width='50px'>{props.thisPage==="book"?       <Image width='37px' height='40px' src='/Icon/complete.png'/>      : <Image onClick={()=>navigate('/postlist')} width='37px' height='40px' src='/Icon/complete.png'/>}</Grid>
                <Grid marginBottom='45px' width='60px' height='60px' borderRadius='30px' backgroundColor='#6454FF' is_flex alignItems='center' justifyContent='center' fontSize='40px'>
                    <Text color='white'  margin='0' height='53px' onClick={()=>navigate('/write')}><BiPlus/></Text>
                </Grid>
                <Grid is_flex justifyContent='center'  backgroundColor='#F9FAFB' width='50px'>{props.thisPage==="postList"?    <Image width='37px' height='40px' src='/Icon/incomplete.png'/>      : <Image onClick={()=>navigate('/write')} width='37px' height='40px' src='/Icon/incomplete.png'/>}</Grid>
                <Grid is_flex justifyContent='center'  backgroundColor='#F9FAFB' width='50px'>{props.thisPage==="userPage"?    <Image width='46px' height='40px' src='/Icon/myPage.png'/>      : <Image onClick={()=>navigate(_user.is_login?`/userpage/${_user.user.userKey}`:`/login`)} width='46px' height='40px' src='/Icon/myPage.png'/>}</Grid>
            </Grid>
        </Grid>
    );
} 


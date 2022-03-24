//import Lidrary
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginBanner from "./LoginBanner";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

export default function Bottom(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [alrt,setAlrt] = React.useState(true);

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    // console.log(_user);
    React.useEffect(()=>{

    },[])

    const loginAlrt = () => {
        setAlrt(false);
        setTimeout(()=>{
            setAlrt(true);
        },5000)
    }


    return (
        <>
        <LoginBanner hide={alrt}/>
        <Grid zIndex='9' position="absolute" bottom="-0px" borderRadius="10px 10px 0 0" >
            <Grid is_flex backgroundColor='#F9FAFB' borderRadius="10px 10px 0 0" alignItems="center" color='#7E7E7E' justifyContent="space-around" width="100vw" minWidth ="360px" maxWidth ="420px" height='60px'>
                <Grid is_flex justifyContent='center' backgroundColor='#F9FAFB' width='50px'>{props.thisPage==="main"?       <Image width='25px' height='40px' src='/Icon/Main.png'/>             : <Image onClick={()=>navigate('/')} width='25px' height='40px' src='/Icon/Main.png'/>}</Grid>
                <Grid is_flex justifyContent='center'  backgroundColor='#F9FAFB' width='50px'>{props.thisPage==="book"?       <Image width='37px' height='40px' src='/Icon/complete.png'/>      : <Image onClick={()=>navigate('/postlist/recent')} width='37px' height='40px' src='/Icon/complete.png'/>}</Grid>
                <Grid marginBottom='45px' width='60px' height='60px' borderRadius='30px' backgroundColor='#6454FF' is_flex alignItems='center' justifyContent='center' fontSize='40px'>
                    <Image width='30px' height='30px' src='/Icon/Plus.png' onClick={()=>navigate('/write')}/>
                </Grid>
                <Grid is_flex justifyContent='center'  backgroundColor='#F9FAFB' width='50px'>{props.thisPage==="postList"?    <Image width='37px' height='40px'  onClick={()=>navigate('/postlist/all')} src='/Icon/incomplete.png'/>      : <Image onClick={()=>navigate('/postlist/all')} width='37px' height='40px' src='/Icon/incomplete.png'/>}</Grid>
                <Grid is_flex justifyContent='center'  backgroundColor='#F9FAFB' width='50px'><Image onClick={()=>_user.is_login?navigate(`/userpage/${_user.user.userKey}`):loginAlrt()} width='46px' height='40px' src='/Icon/myPage.png'/></Grid>
            </Grid>
            {/* <Grid height='100px' width='100%' backgroundColor='#F9FAFB'/> */}
        </Grid>
        </>
    );
} 


import React from "react";
import styled, {keyframes} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import { Grid, Button ,Image, Text } from "../elements";


const LoginBanner = React.memo((props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);

    return(
        <Grid display={props.hide?"none":""}>
            <Toast>
                <Grid width='320px' height='250px' borderRadius='5px' backgroundColor="#FFFFFFEE" is_flex flexDirection='column' justifyContent='center' alignItems='center' gap='10px'>
                    <Text fontSize='24px' fontWeight='500'>로그인이 필요합니다.</Text>
                    <Image backgroundSize='contain' backgroundRepeat='no-repeat' width='150px' height='45px' src="/Logo/Logo_p.png"></Image>
                    <Text fontSize='16px' fontWeight='500' color='#7E7E7E'>로그인 후 해당 기능을 사용할 수 있어요!</Text>
                    <Button onClick={() => {navigate('/login')}} width='300px' height='40px' theme='unfilled'>로그인 하러 가기</Button>
                </Grid>
            </Toast>
        </Grid>
    )
})



const ToastAnimation = keyframes`
    100% {
        left : -100%;
    }
    98% {
        left : -50%;
    }
    96% {
        left : -10%;
    }
    94% {
        left : 20%;
    }
    92% {
        left : 40%;
    }
    90%{
        top : 30%;
        left : 50%;
        transform: translate(-50%, -50%);
    }
    10%{
        top : 30%;
        left : 50%;
        transform: translate(-50%, -50%);

    }
    8% {
        left : 40%;
    }
    6% {
        left : 20%;
    }
    4% {
        left : -10%;
    }
    2% {
        left : -50%;
    }
    0% {
        left : -100%;
    }
`;

const ToastAnimation1 = keyframes`
    100% {
        opacity : 0;
    }70%{
        opacity : 1;
    }
    30%{
        opacity : 1;
    }
    0% {
        opacity : 0;
    }
`;

const Toast = styled.div`
    z-index : 10;
    position: absolute;
    top : 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s;
    opacity: 1;
    
    animation : ${ToastAnimation} 5s linear forwards;

`;

export default LoginBanner;
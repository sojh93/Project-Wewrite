//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

//import Pages
import Main from "./Main";
import Signup from "./Signup";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements"
//import Icon

//impot Component

import HorizontalLine from "../components/HorizontalLine";

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";

//import axios


//43268aa6f88af6282a341e3b61b9a761
import instance from "../shared/Request";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const _user = useSelector(state => state.user);

    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);


        const userInfo = {
            username: data.get('loginID'),
            password: data.get('password'),
        };

        dispatch(userActions.login(userInfo))


        navigate('/');

    };

    return (
        <Grid wrap>
            <Grid is_flex alignItems="center" flexDirection="column" margin='100px 0 0 0' height="90px" width="320px">
                <Text fontSize="16px" fontWeight="400">로그인</Text>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "300px", mt: 1, alignItems: 'center', textAlign: 'center' }}>
                    <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="loginID"
                        label="이메일"
                        name="loginID"
                        // autoComplete="loginID"
                        autoFocus
                    />
                    <TextField
                        sx={{ marginTop: "0px", marginBottom: "0px", height: "40px", bgcolor: "white" }}
                        margin="normal"
                        size="small"
                        //required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                    // autoComplete="current-password"
                    />
                    <Button
                        theme="unfilled"
                        margin="50px"
                    >다음</Button>
                </Box>
                <Grid width='280px' heigh='1px' borderBottom='1px solid gray'></Grid>
                <Grid padding="1px">
                    <Text>or</Text>
                </Grid>
                <Grid
                    margin="10px"
                    padding="0 10px 0 10px"
                >
                    <Button
                        onClick={() => window.location.assign('https://kauth.kakao.com/oauth/authorize?client_id=43268aa6f88af6282a341e3b61b9a761&redirect_uri=http://localhost:3000/login/kakaoLogin&response_type=code')}
                        backgroundImage='https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png'
                        width=""
                        heigh=""
                        border='0px'
                        backgroundColor="#00000000"
                    >
                        카카오로 로그인하기
                    </Button>
                </Grid>
                <Grid
                    is_flex
                    justifyContent="space-between"
                    width="100%">
                    <Button border='0px' backgroundColor="#00000000" onClick={() => navigate('/signup')}>회원가입</Button>
                    <Button border='0px' backgroundColor="#00000000">비밀번호 찾기</Button>
                </Grid>
            </Grid>

        </Grid>
    );
}
export default Login;
//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import Actions
//import Pages
import Main from "./Main";
import LegiMem from "./LegiMem";
//import elements
import { Button, Grid, Input, Image, Text } from "../elements"
//import Icon
//impot Component
//import Actions
//import axios
import instance from "../shared/Request";

function Login() {
    const regist_mem = () => {
        this.props.history.push('/LegiMem');
    }

    return (
        <Grid wrap>
            <Grid is_flex align-items="center" flexDirection="column" border="1px solid black" height="90px" width="320px">
                <Text fontSize="30px" fontWeight="600">로그인</Text>
                <Grid margin="30px 0 10px 0">
                    <Text>ID</Text>
                    <Input></Input>
                </Grid>
                <Grid margin="10px">
                    <Text >PW</Text>
                    <Input type="password"></Input>
                </Grid>
                <Button margin="20px" width="80px" onClick={Main}>로그인</Button>
                
                <Grid margin="10px">카카오 계정 로그인</Grid>
                <Grid margin="10px">Signin with Google</Grid>
                <Text>회원이 아니신가요?</Text>
                <Button onClick={regist_mem}>회원가입</Button>
            </Grid>

        </Grid>
    );
}
export default Login;
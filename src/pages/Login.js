//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
//import Actions
//import elements
import { Button, Grid, Input, Image, Text } from "../elements"
//import Icon
//impot Component
//import Actions
//import axios
import instance from "../shared/Request";

function Login() {
    return (
        <Grid wrap>
            <Grid is_flex align-items="center" flexDirection="column"  border="1px solid black" height="100px" width="320px">
                <Text fontSize="30px" fontWeight="600">로그인</Text>
                <Grid margin="30px 0 10px 0">
                    <Text>아이디</Text>
                    <Input></Input>
                </Grid>
                <Grid margin="10px">
                    <Text>비밀번호</Text>
                    <Input></Input>
                </Grid>
                <Button margin="20px" width="80px">로그인</Button>


                <Grid>
                    <Text>회원이 아니신가요?</Text>
                </Grid>
                    <Text onClick={()=>{console.log("회원가입 창으로 가기")}}>회원가입</Text>
            </Grid>

        </Grid>
    );
}
export default Login;
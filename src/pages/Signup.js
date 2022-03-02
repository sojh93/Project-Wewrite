//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import Actions

//import Page
import Login from "../pages/Login";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements"

//import Icon
import blank from "../image/blank.jpg";

//impot Component
//import Actions
//import axios
import instance from "../shared/Request";
import axios from "axios";

function Signup() {
    const regi_completed = () => {
        this.props.history.push('/Login');
    }

    return (
        <Grid wrap>
            <Grid is_flex align-items="center" flexDirection="column" border="1px solid black" height="90px" width="320px">
                <Text fontSize="30px" fontWeight="600">회원가입</Text>

                <img src={blank} width="50px" height="50px"/>
                <Button>프로필 사진 추가하기</Button>

                <Grid margin="20px 0 10px 0">
                    <Text>ID</Text>
                    <Input></Input>
                </Grid>
                <Grid margin="10px">
                    <Text>NickName</Text>
                    <Input></Input>
                </Grid>
                <Grid margin="10px">
                    <Text>Password</Text>
                    <Input type="password"></Input>
                </Grid>
                <Grid margin="10px">
                    <Text>Password Check</Text>
                    <Input type="password"></Input>
                </Grid>
                <Button margin="20px" width="80px" onClick={regi_completed}>회원가입 완료</Button>
            </Grid>

        </Grid>
    );
}
export default Signup;
//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
//import Actions
//import Pages
import LegiMem from "./LegiMem";
//import elements
import { Button, Grid, Input, Image, Text } from "../elements"
//import Icon
//impot Component
//import Actions
//import axios
import instance from "../shared/Request";

function Clause() {
    return (
        <Grid wrap>
            <Grid is_flex align-items="center" flexDirection="column"  border="1px solid black" height="100px" width="320px">
                <Text fontSize="30px" fontWeight="600">약 관</Text>
                <Grid margin="30px 0 10px 0">
                    <Text>이용약관 동의(필수)</Text>
                    <Text>제 1조 (목적)</Text>
                    <Text>반려 동물 초상권...</Text>
                    
                </Grid>
                <Grid margin="30px 0 10px 0">
                    <Text>개인정보 수집 및 이용에 대한 안내(필수)</Text>
                    <Text>정보통신망법 규정에 따라 OOO에 회원 가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집...</Text>
                </Grid>
                <Grid margin="30px 0 10px 0">
                    <Text>위치정보 이용약관 동의(선택)</Text>
                    <Text>제 1조(목적)</Text>
                    <Text>이 약관은 OOO(이하 '회사')가 제공하는 위치사업정보...</Text>
                </Grid>
                <div>
                    <button onClick={LegiMem}>동의</button>
                </div>
                <div>
                    <button>비동의</button>
                </div>
            </Grid>
        </Grid>
    );
}
export default Clause;
import React from 'react'
import './styles.css'
import { useNavigate } from "react-router-dom";

import instance from "../shared/Request";
import { getCookie } from "../shared/Cookie";

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";

function ChangePassword() {
    const curPRef = React.useRef();
    const changePRef = React.useRef();
    const changePCheckRef = React.useRef();
    const navigate = useNavigate();

    const change = () => {
        if(changePRef.current.value !== changePCheckRef.current.value){
            return
        }
        const token = getCookie('WW_user');
        instance({
            method : "put",
            url : `/updatePassword`,
            data : {password:curPRef.current.value,
                    newPassword:changePRef.current.value},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            window.alert('비밀번호가 변경되었습니다.');
            navigate(-2);
        }).catch(err=>{
            window.alert('비밀번호 변경이 실패하였습니다.');
            window.location.reload();
        })
    }
    return (
        <Grid wrap>
            <Header isChangePassword ChangePassword="비밀번호 변경"/>
            <Grid is_flex margin="103px 0 0 29px" width="100%" justifyContent="left" >
                <Text fontSize="14px" margin="0" color="#9e9e9e">
                ※ 10~20자 사이로 비밀번호를 생성해 주세요.
                </Text>
            </Grid>
            <Grid is_flex margin="0 0 0 29px" width="100%" justifyContent="left" >
                <Text fontSize="14px" margin="0" color="#9e9e9e" >
                ※ 대/소문자, 숫자, 특수문자 중 2개 이상을 사용주세요.
                </Text>
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="60px 0 0 20px" width="350px">
                <Input _ref={curPRef} isTheme className="Password" type="password" width='100%' border='0' placeholder="현재 비밀번호" placeholderTextColor="#e0e0e0"/>
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="20px 0 0 20px" width="350px">
                <Input _ref={changePRef} isTheme className="Password" type="password" width='100%' border='0' placeholder="새 비밀번호" placeholderTextColor="#e0e0e0"/>
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="20px 0 0 20px" width="350px">
                <Input _ref={changePCheckRef} isTheme className="Password" type="password" width='100%' border='0' placeholder="비밀번호 확인" placeholderTextColor="#e0e0e0"/>
            </Grid>
            <Grid margin='80px' width='100%' is_flex alignItems='center' justifyContent='center'>
                <Button onClick={change} theme='unfilled' width='120px'>변경하기</Button>
            </Grid>
        </Grid>
    )
}



export default ChangePassword
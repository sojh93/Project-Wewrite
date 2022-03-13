import React from 'react'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';

function ChangePassword() {
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
                <Text width='130px' margin='0 0 10px 0' color="#e0e0e0">현재 비밀번호</Text>
                <Input isTheme width='220px' border='0'/>
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="20px 0 0 20px" width="350px" justifyContent="center">
                <Text width='130px' margin='0 0 10px 0' color="#e0e0e0" display="block">새 비밀번호</Text>
                <Input isTheme width='220px' border='0'/>
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="20px 0 0 20px" width="350px" justifyContent="center">
                <Text width='130px' margin='0 0 10px 0' color="#e0e0e0" display="block">새 비밀번호 다시입력</Text>
                <Input isTheme width='220px' border='0'/>
            </Grid>
            
        </Grid>
    )
}

export default ChangePassword
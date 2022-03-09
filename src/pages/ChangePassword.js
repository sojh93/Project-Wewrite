import React from 'react'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';

function ChangePassword() {
    return (
        <Grid wrap>
            <Header />
            <Grid margin="60px 0 0 0">
                <Grid margin="30px 0 30px 15px">
                    <Text
                        fontColor="#CCCCCC"
                    >※ 10~20자 사이로 비밀번호를 생성해 주세요.</Text>
                    <Text
                        fontColor="#CCCCCC"
                    >※ 대/소문자, 숫자, 특수문자 중 2개 이상을 사용주세요.</Text>
                </Grid>
                <Grid margin="10px">
                    <Text>현재 비밀번호</Text>
                    <Input type="password" width="100%"/>
                </Grid>
                <Grid margin="10px">
                    <Text>새 비밀번호</Text>
                    <Input type="password" width="100%" />
                </Grid>
                <Grid margin="10px">
                    <Text>새 비밀번호 확인</Text>
                    <Input type="password" width="100%" />
                </Grid>
            </Grid>
            <Bottom />
        </Grid>
    )
}

export default ChangePassword
import React from 'react'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';

function withdrawMember() {

    return (
        <Grid wrap display="relative">
            <Header />
            <Grid margin="60px 0 0 0">
                <Grid margin="25px 0 25px 0">
                    <Text
                        fontColor="#CCCCCC"
                    >※ 탈퇴하시면 복구가 불가능합니다.</Text>
                </Grid>
                <Grid margin="10px">
                    <Text>이메일</Text>
                    <Input width="100%" />
                </Grid>
                <Grid margin="10px">
                    <Text>비밀번호</Text>
                    <Input type="password" width="100%"/>
                </Grid>
                <Grid
                 justify-content="flex-end"
                 flex-direction="column"
                 >
                    <Button
                        is_flex
                        align-items="center"
                        padding="0 37% 0 37%"
                        position="fixed"

                    >탈퇴하기</Button>
                </Grid>
            </Grid>
            <Bottom />
        </Grid>
    )
}

export default withdrawMember
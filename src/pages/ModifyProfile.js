import React from 'react'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';

// import default image
import blank from "../image/blank.jpg"

function modifyProfile() {
    return (
        <Grid wrap>
            <Header />
            <Grid margin="60px 0 0 0">
                <Grid is_flex align-items="center" flexDirection="column" width="320px" height="90px">
                    <Image src={blank} width="70px" height="70px" />
                    <Button>프로필 사진 추가하기</Button>
                </Grid>
                <Grid margin="10px" is_flex>
                    <Grid>
                        <Text>닉네임</Text>
                    </Grid>
                    <Grid justifyContent="flex-end">
                        <Input />
                    </Grid>
                </Grid>
                <Grid margin="10px" is_flex>
                    <Grid>
                        <Text>소개글</Text>
                    </Grid>
                    <Grid justifyContent="flex-end">
                        <Input />
                    </Grid>
                </Grid>
                <Grid margin="10px" is_flex>
                    <Grid>
                        <Text>이메일</Text>
                    </Grid>
                    <Grid justifyContent="flex-end">
                        <Input />
                    </Grid>
                </Grid>
                <Grid
                    margin="10px"
                    is_flex
                    justifyContent="space-between"
                    width="300px"
                >
                    <Text>비밀번호</Text>
                    <Text>변경하기 {'>'}</Text>
                </Grid>
            </Grid>
            <Grid>
                <Button
                    border='0px'
                    color="#FF0000"
                    margin="35% 37% 0 37%"
                    is_flex
                    align-items="center"
                    flexDirection="column"
                >회원 탈퇴</Button>
            </Grid>
            <Bottom />
        </Grid >
    )
}

export default modifyProfile
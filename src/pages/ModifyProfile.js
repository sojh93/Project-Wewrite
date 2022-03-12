// import Library
import React from 'react'

// inport MUI
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

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
                <Grid is_flex alignItems="center" flexDirection="column" width="320px" height="90px">
                    <Image src={blank} width="70px" height="70px" />
                    <Button>프로필 사진 추가하기</Button>
                </Grid>
                <Box>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="loginID"
                        label="닉네임"
                        name="Nickname"
                        // autoComplete="loginID"
                        autoFocus
                        />
                    </Grid>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="loginID"
                        label="소개"
                        name="Introduction"
                        // autoComplete="loginID"
                        autoFocus
                        />
                    </Grid>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="loginID"
                        label="이메일"
                        name="Email"
                        // autoComplete="loginID"
                        autoFocus
                        />
                    </Grid>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="password"
                        label="비밀번호 변경하기"
                        name="Nickname"
                        type="password"
                        // autoComplete="loginID"
                        autoFocus
                        />
                    </Grid>
                </Box>
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
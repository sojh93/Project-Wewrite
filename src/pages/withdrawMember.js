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

function withdrawMember() {

    return (
        <Grid wrap display="relative">
            <Header />
            <Grid margin="60px 0 0 0">
                <Box>
                    <Grid margin="25px 0 25px 0">
                        <Text
                            fontColor="#CCCCCC"
                        >※ 탈퇴하시면 복구가 불가능합니다.</Text>
                    </Grid>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="Email"
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
                        label="비밀번호"
                        name="Password"
                        // autoComplete="loginID"
                        autoFocus
                        />
                    </Grid>
                </Box>
                <Grid
                    justify-content="flex-end"
                    flex-direction="column"
                >
                    <Button
                        is_flex
                        align-items="center"
                        padding="0 165px 0 165px"
                        position="fixed"

                    >탈퇴하기</Button>
                </Grid>
            </Grid>
            <Bottom />
        </Grid>
    )
}

export default withdrawMember
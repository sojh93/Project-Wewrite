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

function ChangePassword() {
    return (
        <Grid wrap>
            <Header />
            <Grid margin="60px 0 0 0">
                <Box>
                    <Grid margin="30px 0 30px 15px">
                        <Text
                            fontColor="#CCCCCC"
                        >※ 10~20자 사이로 비밀번호를 생성해 주세요.</Text>
                        <Text
                            fontColor="#CCCCCC"
                        >※ 대/소문자, 숫자, 특수문자 중 2개 이상을 사용주세요.</Text>
                    </Grid>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="password"
                        label="현재 비밀번호"
                        name="Password"
                        // autoComplete="loginID"
                        autoFocus
                        type="password"
                        />
                    </Grid>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="newPassword"
                        label="새 비밀번호"
                        name="newPassword"
                        // autoComplete="loginID"
                        autoFocus
                        type="password"
                        />
                    </Grid>
                    <Grid margin="10px" is_flex>
                        <TextField
                        sx={{ height: "40px", bgcolor: "white", margin: '30px 0' }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="newPassword2"
                        label="새 비밀번호 확인"
                        name="newPassword2"
                        // autoComplete="loginID"
                        autoFocus
                        type="password"
                        />
                    </Grid>
                </Box>
            </Grid>
            <Bottom />
        </Grid>
    )
}

export default ChangePassword
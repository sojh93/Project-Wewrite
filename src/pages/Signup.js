//import Library
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

//import Page
import Login from "../pages/Login";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

//import Icon
import blank from "../image/blank.jpg";

//impot Component

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";

//import axios
import instance from "../shared/Request";
import axios from "axios";
import { method } from "lodash";

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pwdCheck, setPwdCheck] = React.useState(true);
    const [pwdForm, setPwdForm] = React.useState(true);
    const [idForm, setIdForm] = React.useState(true);
    const [pwd, setPwd] = React.useState(true);
    const [preview, setPreview] = React.useState(blank);
    const fileInput = React.useRef();
    var file = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });

    return (
        <Grid wrap is_scroll>
            <Grid
                is_flex
                alignItems="center"
                flexDirection="column"
                height="60px"
                width="320px"
                margin="20px 0"
            >
                <Grid>
                    <Text fontSize="20px" fontWeight="400">
                        회원가입
                    </Text>
                </Grid>

                <Grid is_flex justifyContent="flex-start">
                    <Text
                        fontSize="15px"
                        fontWeight="400"
                        margin="15px 250px 0 5px"
                    >
                        이메일
                    </Text>
                </Grid>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        width: "300px",
                        mt: 1,
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <TextField
                        sx={{
                            height: "40px",
                            bgcolor: "white",
                            margin: "10px 0 15px 0",
                        }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="loginID"
                        label="email"
                        name="loginID"
                        // autoComplete="loginID"
                        autoFocus
                        onChange={checkId}
                    >
                        <Button></Button>
                    </TextField>
                    <TextField
                        sx={{
                            height: "40px",
                            bgcolor: "white",
                            margin: "15px 0 15px 0",
                        }}
                        margin="normal"
                        size="small"
                        fullWidth
                        id="nickname"
                        label="인증코드"
                        name="nickname"
                        // autoComplete="nickname"
                        autoFocus
                        onChange={checkId}
                    />
                    <Grid>
                        <Text
                            fontSize="15px"
                            fontWeight="400"
                            margin="15px 250px 0 1px"
                            width="70px"
                        >
                            비밀번호
                        </Text>
                    </Grid>

                    <TextField
                        sx={{
                            height: "40px",
                            bgcolor: "white",
                            margin: "15px 0 0 0",
                        }}
                        margin="normal"
                        size="small"
                        error={!pwdForm}
                        //required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        // autoComplete="current-password"
                        onChange={pwdChange}
                    />
                    <Grid is_flex margin="0 286px 0 0" width="100%" padding="0">
                        <Text fontSize="8px" margin="5px 0 0 3px">
                            ※ 10~20자 사이로 비밀번호를 생성해주세요.
                        </Text>
                    </Grid>
                    <Grid is_flex margin="0 286px 0 0" width="100%">
                        <Text fontSize="8px" margin="5px 0 20px 3px">
                            ※ 대/소문자, 숫자, 특수문자 등 2개 이상을
                            사용해주세요.
                        </Text>
                    </Grid>

                    <Grid>
                        {/* <Text
              fontSize="15px"
              fontWeight="400"
              margin="15px 250px 0 1px"
              width="100px"
            > */}
                        <Grid>
                            <Text fontSize="20px" fontWeight="400">
                                회원가입
                            </Text>
                        </Grid>

                        <Grid is_flex justifyContent="flex-start">
                            <Text
                                fontSize="15px"
                                fontWeight="400"
                                margin="15px 250px 0 5px"
                            >
                                이메일
                            </Text>
                        </Grid>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{
                                width: "300px",
                                mt: 1,
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <TextField
                                sx={{
                                    height: "40px",
                                    bgcolor: "white",
                                    margin: "10px 0 15px 0",
                                }}
                                margin="normal"
                                size="small"
                                fullWidth
                                id="email"
                                label="email"
                                name="email"
                                // autoComplete="loginID"
                                autoFocus
                                onChange={checkId}
                            >
                                <Button></Button>
                            </TextField>
                            <TextField
                                sx={{
                                    height: "40px",
                                    bgcolor: "white",
                                    margin: "15px 0 15px 0",
                                }}
                                margin="normal"
                                size="small"
                                fullWidth
                                id="emailCode"
                                label="인증코드"
                                name="Code"
                                // autoComplete="nickname"
                                autoFocus
                                onChange={checkId}
                            />
                            <Grid is_flex justifyContent="flex-start">
                                <Text
                                    fontSize="15px"
                                    fontWeight="400"
                                    margin="15px 250px 0 5px"
                                    width="70px"
                                >
                                    닉네임
                                </Text>
                            </Grid>
                            <TextField
                                sx={{
                                    height: "40px",
                                    bgcolor: "white",
                                    margin: "15px 0 15px 0",
                                }}
                                margin="normal"
                                size="small"
                                fullWidth
                                id="emailCode"
                                label="닉네임"
                                name="Code"
                                // autoComplete="nickname"
                                autoFocus
                                // onChange={checkNickname}
                            />
                            <Grid>
                                <Text
                                    fontSize="15px"
                                    fontWeight="400"
                                    margin="15px 250px 0 1px"
                                    width="70px"
                                >
                                    비밀번호
                                </Text>
                            </Grid>

                            <TextField
                                sx={{
                                    height: "40px",
                                    bgcolor: "white",
                                    margin: "15px 0 0 0",
                                }}
                                margin="normal"
                                size="small"
                                error={!pwdForm}
                                //required
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                // autoComplete="current-password"
                                onChange={pwdChange}
                            />
                            <Grid
                                is_flex
                                margin="0 286px 0 0"
                                width="100%"
                                padding="0"
                            >
                                <Text fontSize="8px" margin="5px 0 0 3px">
                                    ※ 10~20자 사이로 비밀번호를 생성해주세요.
                                </Text>
                            </Grid>
                            <Grid is_flex margin="0 286px 0 0" width="100%">
                                <Text fontSize="8px" margin="5px 0 20px 3px">
                                    ※ 대/소문자, 숫자, 특수문자 등 2개 이상을
                                    사용해주세요.
                                </Text>
                            </Grid>

                            <Grid>
                                <Text
                                    fontSize="15px"
                                    fontWeight="400"
                                    margin="15px 250px 0 1px"
                                    width="100px"
                                >
                                    비밀번호 확인
                                </Text>
                            </Grid>

                            <TextField
                                sx={{
                                    marginTop: "10px",
                                    marginBottom: "0px",
                                    height: "40px",
                                    bgcolor: "white",
                                }}
                                margin="normal"
                                size="small"
                                error={!pwdCheck}
                                helperText={
                                    pwdCheck ? "" : "비밀번호와 다릅니다."
                                }
                                fullWidth
                                name="passwordCheck"
                                label="비밀번호 확인"
                                type="password"
                                id="passwordCheck"
                                // autoComplete="current-passwordCheck"
                                onChange={pwdCheckChange}
                            />

                            <Grid
                                is_flex
                                padding="0"
                                width="100%"
                                margin="100px 0 0 5px"
                                textAlign="left"
                            >
                                <Text fontSize="3px">
                                    서비스의 이용을 위한 약관동의와 개인정보
                                    수집에 대한 동의가 필요합니다.
                                </Text>
                            </Grid>

                            <Grid
                                is_flex
                                padding="10px"
                                margin="5px 0 0 0"
                                width="300px"
                                border="1px solid #6454FF"
                            >
                                <Input
                                    isTheme
                                    type="radio"
                                    value="회원가입 약관동의(전체)"
                                    name="회원가입 약관동의"
                                    padding="0"
                                    margin="0"
                                />
                            </Grid>
                            <Grid
                                is_flex
                                flexDirection="column"
                                padding="0"
                                margin="10px"
                                width="300px"
                                textAlign="left"
                            >
                                <Input
                                    isTheme
                                    type="radio"
                                    value="[필수] 준회원서비스 이용약관"
                                    name="회원가입 약관동의1"
                                />
                                <Input
                                    isTheme
                                    type="radio"
                                    value="[필수] 개인(신용)전보 준회원 필수 동의서"
                                    name="회원가입 약관동의2"
                                />
                                <Input
                                    isTheme
                                    type="radio"
                                    value="[선택] 개인(신용)정보 선택동의서_준회원"
                                    name="회원가입 약관동의3"
                                />
                            </Grid>

                            <Button
                                theme="unfilled"
                                type="submit"
                                variant="contained"
                                sx={{
                                    color: "#6454FF",
                                    bgcolor: "primary.button",
                                    mt: 3,
                                    mb: 2,
                                }}
                            >
                                가입
                            </Button>
                        </Box>
                        <Grid width="10px" height="10px" margin="20px" />
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}
export default Signup;

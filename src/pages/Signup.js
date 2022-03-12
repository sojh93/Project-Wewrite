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
import Header from "../components/Header";
import { Chip } from "../elements";

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";

//import axios
import instance from "../shared/Request";
import { method } from "lodash";

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pwdCheck, setPwdCheck] = React.useState(true);
    const [pwdForm, setPwdForm] = React.useState(true);
    const [idForm, setIdForm] = React.useState(true);
    const [pwd, setPwd] = React.useState(true);
    const [preview, setPreview] = React.useState(blank);
    const [email, setEmail] = React.useState(null);
    const [emailVeri, setEmailVeri] = React.useState(false);
    const [code, setCode] = React.useState(null);
    const [codeVeri, setCodeVeri] = React.useState(false);



    const fileInput = React.useRef();
    var file = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });

    const [postFile, setPostFile] = React.useState(file);

    React.useEffect(() => {
    }, []);



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const postData = new FormData();

        postData.append("userProfile", postFile);
        postData.append("username", data.get("loginID"));
        postData.append("nickName", data.get("nickname"));
        postData.append("password", data.get("password"));
        postData.append("checkPassword", data.get("password"));
        postData.append("introduction", " ");

        dispatch(userActions.signup(postData));
    };

    const checkId = (e) => {
        let _reg = /^[-_.0-9a-zA-Z]{6,15}$/;
        if(e.target.value === ''){
            setEmail(false);
        }else{
            setEmail(e.target.value);
        }
    };
    const checkCode = (e) => {
        if(e.target.value === ''){
            setCode(false);
        }else{
            setCode(e.target.value);
        }
    };
    const pwdChange = (e) => {
        let _reg = /^[-_.!0-9a-zA-Z]{6,15}$/;
    };

    const pwdCheckChange = (e) => {};

    const emailVerification = (e)=>{
        setEmailVeri(true);
        instance({
            method : "post",
            url : "/mailCheck",
            data : {email},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            console.log(res)
        });
    };
    const codeVerification = (e)=>{
        setCodeVeri(true);
    };

    return (
        <Grid wrap>
            <Header/>
            <Grid
                is_flex
                alignItems="center"
                flexDirection="column"
                marginTop = '80px'
            >
                <Grid is_flex flexDirection='column' width='300px'>
                    <Text fontSize="24px" fontWeight="700">
                        회원가입
                    </Text>
                    <Text color='#7E7E7E' fontSize="12px" fontWeight="400">
                    원활한 서비스 이용을 위한 기본 정보를 입력해주세요.
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
                    <Grid is_flex flexDirection='column' height='75px' position='relative'>
                        <TextField
                            sx={{
                                height: "30px",
                                bgcolor: "white",
                                margin: "10px 0 15px 0",
                            }}
                            margin="normal"
                            size="small"
                            fullWidth
                            id="loginID"
                            label="email"
                            name="loginID"
                            autoFocus
                            onChange={checkId}
                        >
                        </TextField>
                        
                        {email?
                        <Chip onClick={emailVerification} position='absolute' right='10px' top='17px' width="70px" height="24px" backgroundColor='#6454FF'>인증코드</Chip> :
                        <Chip position='absolute' right='10px' top='17px' width="70px" height="24px" backgroundColor='#EAEAEA'>인증코드</Chip>
                        }                        
                        
                        <Text display={emailVeri?'':'none'} margin="0" color='#6454FF' fontWeight='400' fontSize='14px'>인증 코드를 발급했습니다. 이메일을 확인해주세요.</Text>

                    </Grid>
                    
                    <Grid is_flex flexDirection='column' alignItems='flex-start' height='100px' position='relative'>
                        <TextField
                            sx={{
                                height: "30px",
                                bgcolor: "white",
                                margin: "15px 0 15px 0",
                            }}
                            margin="normal"
                            size="small"
                            fullWidth
                            id="code"
                            label="인증코드"
                            name="code"
                            autoFocus
                            onChange={checkCode}
                        />

                        {code?
                        <Chip onClick={codeVerification} position='absolute' right='10px' top='22px' width="70px" height="24px" backgroundColor='#6454FF'>인증하기</Chip> :
                        <Chip position='absolute' right='10px' top='22px' width="70px" height="24px" backgroundColor='#EAEAEA'>인증하기</Chip>
                        }                        
                        
                        <Text display={codeVeri?'':'none'} margin="0" color='#6454FF' fontWeight='400' fontSize='14px'>인증되었습니다.</Text>

                    </Grid>

                    <Grid is_flex flexDirection='column' alignItems='flex-start' height='80px' position='relative'>


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
                            name="nickname"
                            label="닉네임"
                            id="nickname"
                            // autoComplete="current-password"
                            onChange={pwdChange}
                        />
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
                        helperText={pwdCheck ? "" : "비밀번호와 다릅니다."}
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
                            서비스의 이용을 위한 약관동의와 개인정보 수집에 대한
                            동의가 필요합니다.
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
        </Grid>
    );
}
export default Signup;

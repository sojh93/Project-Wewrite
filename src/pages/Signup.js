//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

//import Page
import Login from "../pages/Login";

//import elements
import { Button,Grid, Input, Image, Text } from "../elements"

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

    const [pwdCheck,setPwdCheck] = React.useState(true);
    const [pwdForm,setPwdForm] =React.useState(true);
    const [idForm,setIdForm] =React.useState(true);
    const [pwd,setPwd] = React.useState(true);
    const [preview,setPreview] =React.useState(blank);
    const fileInput = React.useRef();
    var file = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });
    const [postFile,setPostFile] =React.useState(file);
    
    const selectFile =(e) =>{
        const formData = new FormData();
        const file = fileInput.current.files[0];
        setPostFile(file);
        
        formData.append("userProfile",file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load",function () {
            console.log(reader.result);
            setPreview(reader.result);
        });

    }
    


    const handleSubmit = (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const postData = new FormData();
        
        
        postData.append("userProfile",postFile);
        postData.append("username",data.get('loginID'));
        postData.append("nickName",data.get('nickname'));
        postData.append("password",data.get('password'));
        postData.append("checkPassword",data.get('password'));
        postData.append("introduction"," ");


        dispatch(userActions.signup(postData));
    };


    const checkId = (e) => {
        let _reg = /^[-_.0-9a-zA-Z]{6,15}$/
    };
    
    const pwdChange= (e)=>{
        let _reg = /^[-_.!0-9a-zA-Z]{6,15}$/
    }
    
    const pwdCheckChange= (e)=>{

    }


    return (
        <Grid wrap>
            <Grid is_flex alignItems="center" flexDirection="column" border="1px solid black" height="90px" width="320px">
                <Text fontSize="30px" fontWeight="600">회원가입</Text>

                <Image src={preview} is_circle/>

                <Button onClick={()=>{fileInput.current.click()}}>프로필 사진 추가하기</Button>
                <input ref={fileInput} onChange={selectFile} type="file" multiple style={{display:'none'}}/>


                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width : "300px", mt: 1, alignItems: 'center', textAlign: 'center' }}>

                    <TextField
                    sx={{height : "40px" ,bgcolor : "white", }}
                    margin="normal"
                    size="small"
                    fullWidth
                    id="loginID"
                    label="ID"
                    name="loginID"
                    // autoComplete="loginID"
                    autoFocus
                    onChange={checkId}
                    />
                    <TextField
                    sx={{height : "40px" ,bgcolor : "white", }}
                    margin="normal"
                    size="small"
                    fullWidth
                    id="nickname"
                    label="사용자 이름"
                    name="nickname"
                    // autoComplete="nickname"
                    autoFocus
                    onChange={checkId}
                    />
                    <TextField
                    sx={{ marginTop:"0px", marginBottom:"0px" ,height : "40px",bgcolor : "white"}}
                    margin="normal"
                    size="small"
                    error = {!pwdForm}
                    //required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                    onChange={pwdChange}
                    />

                    <TextField
                    sx={{ marginTop:"10px", marginBottom:"0px" ,height : "40px",bgcolor : "white"}}
                    margin="normal"
                    size="small"
                    error = {!pwdCheck}
                    helperText={pwdCheck?"":"비밀번호와 다릅니다."}
                    fullWidth
                    name="passwordCheck"
                    label="비밀번호 확인"
                    type="password"
                    id="passwordCheck"
                    // autoComplete="current-passwordCheck"
                    onChange={pwdCheckChange}
                    />

                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ color : 'white' ,bgcolor : 'primary.button', mt: 3, mb: 2 }}
                    >
                    가입
                    </Button>
                </Box>
            </Grid>
            
        </Grid>
    );
}
export default Signup;
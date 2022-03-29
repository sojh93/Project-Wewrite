import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';

import instance from "../shared/Request";
import { getCookie } from "../shared/Cookie";

import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';
import { SettingsBackupRestore } from '@mui/icons-material';


function ModifyProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    
    const user = _user.user;

    console.log(_user);



    //profile image
    const refFileInput = React.useRef();
    const [preview, setPreview] = React.useState(user.userProfileImage?user.userProfileImage:'/default_img/inputImage.png');
    const userProfile = new FormData();

    const refNick = React.useRef();
    const refIntro = React.useRef();

    const [nick,setNick] = React.useState(_user.is_login?user.nickname:'');
    const [intro,setIntro] = React.useState(_user.is_login?user.introduction:'');

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = refFileInput.current.files[0];
        userProfile.append("userProfile",file);

        
        instance({
            method : "put",
            url : "/user/updateProfile",
            data : userProfile,
            headers : {
                "Content-Type": "multipart/form-data",
                'authorization': getCookie('WW_user')
            }
            
        }).then((res)=>{
            console.log('done',res);
        })
        
        reader.readAsDataURL(file);
        reader.addEventListener("load", function () {
            setPreview(reader.result);
        })
    }

    const finishEdit = ()=>{
        instance({
            method : "post",
            url : "/user/signup/checkNick",
            data : {nickName:nick},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            const userData={
                nickName: nick,
                introduction:intro
            }
            dispatch(userActions.editData(userData))
            dispatch(postActions.userPost(_user.user.userKey));
            navigate(-1);
        }).catch(err=>{
            window.alert("중복된 닉네임입니다.");
        });
        
    }

    return (
        <Grid wrap>
            <Header isEditUser onClick={finishEdit}/>
            <Grid is_flex flexDirection="column" alignItems='center' margin="100px 0 0 0">
                <Grid is_flex alignItems="center" flexDirection="column" width="100%" gap='10px' is_scroll>
                    <Image is_circle size='100' src={preview} />
                    <Button onClick={() => { refFileInput.current.click() }} border="0px" width="95px" height="15px" backgroundColor="white" fontSize="12px" fontWeight="600" color="#7E7E7E" padding="0" margin="0 0 40px 0">프로필 사진 바꾸기</Button>
                    <input ref={refFileInput} onChange={selectFile} type="file" style={{ display: 'none' }} />
                </Grid>
        
                    <Grid is_flex borderBottom='1px solid #E0E0E0' width="350px">
                        <Text ref={refNick} width='40px' height="10px" margin='9px' fontSize="14px" fontWeight="bold" color="#424242" justifyContent="left">닉네임</Text>
                        <Input isTheme onChange={(e)=>{setNick(e.target.value)}} defaultValue={_user.is_login?user.nickname:''} width='350px' border='0' color="#424242" height="40px" margin="0 0 10px 0"/>
                    </Grid>

                    <Grid is_flex borderBottom='1px solid #E0E0E0' width="350px" margin="15px 0 0 0">
                        <Text ref={refIntro} width='34px' height="15px" margin='14px 9px 9px 9px' fontSize="14px" fontWeight="bold" color="#424242">소개</Text>
                        <Input isTheme defaultValue={_user.is_login?user.introduction:''} onChange={(e)=>{setIntro(e.target.value)}} type='textarea' width='350px' height='60px' fontSize="12px" border='0' margin="0 0 0 10px" />
                    </Grid>

                    <Grid is_flex borderBottom='1px solid #E0E0E0' width="350px">
                        <Text width='34px' height="15px" margin='20px 0 10px 9px' fontSize="14px" color="#9e9e9e">이메일</Text>
                        <Text color="#424242" margin="20px" > {_user.is_login?user.username:''}</Text>
                    </Grid>

                <Grid is_flex width="350px" height="40px" margin="15px 0px 15px 0px" borderBottom="1px solid #E0E0E0" justifyContent="space-between" alignItems="center">
                    <Text width="34px" height="15px" margin="0 9px 20px 9px" fontSize="14px" fontWeight="bold" color="#424242" >비밀번호</Text>
                    <Text width="71px" height="32px" fontSize="12px" color="#424242" margin="0" padding="0">변경하기 {'>'}</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="0 10px 10px 10px" borderBottom="1px solid #E0E0E0" justifyContent="space-between">
                    <Text width="34px" height="15px" margin='1px 0 0 9px' fontSize="14px" fontWeight="bold" color="#424242">호칭</Text>
                    <Text display="block" width="71px" height="24px" fontSize="12px" color="#424242" margin="3px 0 0 0">변경하기 {'>'}</Text>
                </Grid>
            </Grid>
            <Grid is_flex flexDirection="column" margin="20px 0 0 0" justifyContent="center">
                <Grid is_flex width="350px" height="40px" margin="10px" justifyContent="space-between">
                    <Text color="#888888" margin="10px 10px 10px 15px">사용자 환경 설정</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="10px 10px 10px 20px" borderBottom="1px solid #E0E0E0">
                    <Text fontWeight="bold" width='34px' height="15px" margin='0 9px 0 5px' fontSize="14px" color="#424242">문의하기</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="10px 10px 10px 20px" borderBottom="1px solid #E0E0E0" justifyContent="space-between" color="#424242">
                    <Text fontWeight="bold" width='34px' height="15px" margin='0 9px 0 5px' fontSize="14px" color="#424242">이용약관</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="10px 10px 10px 20px" borderBottom="1px solid #E0E0E0" justifyContent="space-between" color="#424242">
                    <Text fontWeight="bold" width='34px' height="15px" margin='0 9px 0 5px' fontSize="14px" color="#424242">회원탈퇴</Text>
                </Grid>
            </Grid>
            <Grid height="100px"/>
            
        </Grid >
    )
}

export default ModifyProfile
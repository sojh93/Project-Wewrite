import React from 'react'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';


function ModifyProfile() {

    //profile image
    const refFileInput = React.useRef();
    const [preview, setPreview] = React.useState('/default_img/inputImage.png');

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = refFileInput.current.files[0];
        reader.readAsDataURL(file);
        reader.addEventListener("load", function () {
            setPreview(reader.result);
        })

        console.log('헷')

    }

    return (
        <Grid wrap>
            <Header isEditUser />
            <Grid is_flex flexDirection="column" alignItems='center' margin="100px 0 0 0">
                <Grid is_flex align-items="center" flexDirection="column" width="100%" gap='10px'>
                    <Image is_circle size='100' src={preview} />
                    <Button onClick={() => { refFileInput.current.click() }} border="0px" width="95px" height="15px" backgroundColor="white" fontSize="12px" fontWeight="600" fontColor="#6454FF" padding="0" margin="0 0 40px 0">프로필 사진 바꾸기</Button>
                    <input ref={refFileInput} onChange={selectFile} type="file" style={{ display: 'none' }} />
                </Grid>

                <Grid width="350" height="40px" margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #E0E0E0'>
                        <Text width='34px' height="15px" margin='9px' fontSize="12px" color="#424242">닉네임</Text>
                        <Input isTheme width='350px' border='0' color="#424242" />
                    </Grid>
                </Grid>

                <Grid width="350px" height="76px" margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #E0E0E0'>
                        <Text width='23px' height="15" margin='9px' fontSize="12px" color="#424242">소개</Text>
                        <Input isTheme type='textarea' width='281px' height='60px' fontSize="12px" border='0' />
                    </Grid>
                </Grid>

                <Grid width="350" height="40px" margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #E0E0E0'>
                        <Text width='39px' height="20px" margin='9px' fontSize="12px" color="#cecece">이메일</Text>
                        <Input isTheme width='350px' border='0' color="#cecece" />
                    </Grid>
                </Grid>

                <Grid is_flex width="350px" height="40px" margin="10px" borderBottom="1px solid #E0E0E0" justifyContent="space-between">
                    <Text width="45px" height="15px" fontSize="12px" color="#424242">비밀번호</Text>
                    <Text width="71px" height="24px" fontSize="12px" color="#424242">변경하기 {'>'}</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="10px" borderBottom="1px solid #E0E0E0" justifyContent="space-between">
                    <Text width="45px" height="15px" fontSize="12px" color="#424242">호칭</Text>
                    <Text width="71px" height="24px" fontSize="12px" color="#424242">변경하기 {'>'}</Text>
                </Grid>
            </Grid>
            <Grid margin="50px 0 0 0">
                <Grid>
                    <Text color="#888888">사용자 환경 설정</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="10px" borderBottom="1px solid #E0E0E0" justifyContent="space-between" color="#424242">
                    <Text>문의하기</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="10px" borderBottom="1px solid #E0E0E0" justifyContent="space-between" color="#424242">
                    <Text>이용약관</Text>
                </Grid>
                <Grid is_flex width="350px" height="40px" margin="10px" borderBottom="1px solid #E0E0E0" justifyContent="space-between" color="#424242">
                    <Text>회원탈퇴</Text>
                </Grid>
            </Grid>
            <Bottom />
        </Grid >
    )
}

export default ModifyProfile
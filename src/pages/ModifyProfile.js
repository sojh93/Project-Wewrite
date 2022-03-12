import React from 'react'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';


function ModifyProfile() {

    //profile image
    const refFileInput = React.useRef();
    const [preview,setPreview] = React.useState('/default_img/inputImage.png');
    
    const selectFile = (e) =>{
        const reader = new FileReader();
        const file = refFileInput.current.files[0];
        reader.readAsDataURL(file);
        reader.addEventListener("load",function () {
            setPreview(reader.result);
        })

        console.log('헷')

    }

    return (
        <Grid wrap>
            <Header isEditUser/>
            <Grid is_flex flexDirection="column" alignItems='center' margin="100px 0 0 0">

                <Grid is_flex align-items="center" flexDirection="column" width="100%" gap='10px'>
                    <Image is_circle size='100' src={preview}/>
                    <Button onClick={()=>{refFileInput.current.click()}} border="1px solid #dbdbdb" width = "130px" height="30px" fontSize="12px" fontWeight="600">표지 변경하기</Button>
                    <input ref={refFileInput} onChange={selectFile} type="file" style={{display:'none'}}/>
                </Grid>

                <Grid margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #dbdbdb'>
                        <Text width='40px' margin='9px'>닉네임</Text>
                        <Input isTheme width='250px' border='0'/>
                    </Grid>
                </Grid>

                <Grid margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #dbdbdb'>
                        <Text width='40px' margin='9px'>소개</Text>
                        <Input isTheme height='150px' type='textarea' width='250px' border='0'/>
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
                <Button
                    border='0px'
                    color="#FF0000"
                    margin="20px"
                    is_flex
                >회원 탈퇴</Button>
            </Grid>
        </Grid >
    )
}

export default ModifyProfile
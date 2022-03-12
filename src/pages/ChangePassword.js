import React from 'react'

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
                <Grid margin="30px 0 30px 15px">
                    <Text
                        fontColor="#CCCCCC"
                    >※ 10~20자 사이로 비밀번호를 생성해 주세요.</Text>
                    <Text
                        fontColor="#CCCCCC"
                    >※ 대/소문자, 숫자, 특수문자 중 2개 이상을 사용주세요.</Text>
                </Grid>
                <Grid margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #dbdbdb'>
                        <Text width='40px' margin='9px'>이메일</Text>
                        <Input isTheme width='250px' border='0'/>
                    </Grid>
                </Grid>
                <Grid margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #dbdbdb'>
                        <Text width='40px' margin='9px'>이메일</Text>
                        <Input isTheme width='250px' border='0'/>
                    </Grid>
                </Grid>
                <Grid margin="10px" is_flex>
                    <Grid is_flex borderBottom='1px solid #dbdbdb'>
                        <Text width='40px' margin='9px'>이메일</Text>
                        <Input isTheme width='250px' border='0'/>
                    </Grid>
                </Grid>
                
            </Grid>
            <Bottom />
        </Grid>
    )
}

export default ChangePassword
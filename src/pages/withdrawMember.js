import React from 'react'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';

function withdrawMember() {

    return (
        <Grid wrap>
            <Header isWithdrawMember WithdrawMember="탈퇴하기" />
            <Grid margin="60px 0 0 0">
                <Grid is_flex margin="90px 0 25px 15px" width="350px">
                    <Text color="#9e9e9e" justifyContent="left">
                        ※ 탈퇴하시면 복구가 불가능합니다.
                    </Text>
                </Grid>
                <Grid is_flex borderBottom='1px solid #E0E0E0' width="350px" margin="0 0 0 20px">
                        <Text width='40px' height="10px" margin='9px 9px 9px 0' fontSize="14px" fontWeight="bold" color="#424242" justifyContent="left">닉네임</Text>
                        <Input isTheme width='350px' border='0' color="#424242" height="40px" margin="0 0 10px 7px" />
                </Grid>
                <Grid is_flex borderBottom='1px solid #E0E0E0' width="350px" margin="0 0 10px 20px">
                        <Text width='45px' height="10px" margin='20px 9px 9px 0' fontSize="14px" fontWeight="bold" color="#424242" justifyContent="left">비밀번호</Text>
                        <Input isTheme width='350px' border='0' color="#424242" height="40px" margin="10px 0 10px 20px" className="Password" type="password"/>
                </Grid>
                <Grid is_flex flexDirection="row" width="390px" height="400px" justifyContent="center" alignItems="flex-end">
                <Button
                    theme="unfilled" width='350px' height='40px' margin='50px 0 20px 0'>
                        탈퇴하기
                </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withdrawMember
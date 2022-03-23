//import Library
import React, {useState} from 'react'
import './styles.css'

// import elements
import { Image, Grid, Button, Input, Text } from "../elements/index";

// import components
import Header from "../components/Header";
import Bottom from '../components/Bottom';

function ChangePassword() {
    const [pwd, setPwd] = React.useState(0);

    const submitMessage = () => {
        console.log("비밀번호를 변경하였습니다!");
    }

    return (
        <Grid wrap>
            <Header isChangePassword ChangePassword="비밀번호 변경" />
            <Grid is_flex margin="103px 0 0 29px" width="100%" justifyContent="left" >
                <Text fontSize="14px" margin="0" color="#9e9e9e">
                    ※ 10~20자 사이로 비밀번호를 생성해 주세요.
                </Text>
            </Grid>
            <Grid is_flex margin="0 0 0 29px" width="100%" justifyContent="left" >
                <Text fontSize="14px" margin="0" color="#9e9e9e" >
                    ※ 대/소문자, 숫자, 특수문자 중 2개 이상을 사용주세요.
                </Text>
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="60px 0 0 20px" width="350px">
                <Input isTheme className="Password" type="password" width='220px' border='0' placeholder="현재 비밀번호" placeholderTextColor="#e0e0e0" onChange={(e) => {setPwd(e.target.value)}} />
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="20px 0 0 20px" width="350px">
                <Input isTheme className="Password" type="password" width='220px' border='0' placeholder="새 비밀번호" placeholderTextColor="#e0e0e0" onChange={(e) => {setPwd(e.target.value)}} />
            </Grid>
            <Grid is_flex borderBottom='1px solid #e0e0e0' margin="20px 0 0 20px" width="350px">
                <Input isTheme className="Password" type="password" width='220px' border='0' placeholder="비밀번호 확인" placeholderTextColor="#e0e0e0" onChange={(e) => {setPwd(e.target.value)}} />
            </Grid>
            <Button
                theme="unfilled"
                type="submit"
                onClick={submitMessage}
            > 콘솔로 보내기 </Button>

        </Grid>
    )
}



export default ChangePassword
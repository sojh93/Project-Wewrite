import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import { Grid, Button ,Image, Text } from "../elements";


const LoginBanner = React.memo((props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);

    return(
        <Toast>
            <Grid width='320px' height='270px' is_flex flexDirection='column' alignItems='center'>
                <Text>로그인이 필요합니다.</Text>
                <Image backgroundSize='contain' backgroundRepeat='no-repeat' width='150px' height='45px' src="/Logo/Logo_p.png"></Image>
                <Text>로그인 후 해당 기능을 사용할 수 있어요!</Text>
                <Button theme='unfilled'>로그인 하러 가기</Button>
            </Grid>
        </Toast>
    )
})

const Toast = styled.div`

`;

export default LoginBanner;
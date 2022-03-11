//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI


//import Icon
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

export default function Post({children}) {
    console.log(children);

    return (
        <Grid is_flex justifyContent='space-between' width="100%" gap='10px'>
                <Grid width='100px' is_flex flexDirection='column'>
                    <Image age width="100px" height="100px" borderRadius="5px" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjJfMTcz%2FMDAxNjIxNjcwMzA3ODY1.PK5Q_yIQRr3ZyvTO_XhARkEF9aMJ0C1wavUEr2hEEjgg.kfG41tZDQtwvKtpwO7OhRguDv0C_E5JCSfyGnlpi1rEg.JPEG.vicky0170%2Fe6c17e085ded495c098f99cbea98477d.jpg&type=sc960_832"></Image>
                    <Text fontSize="13px" fontWeight='700'>제목이 길면 얼마나 길까?</Text>
                </Grid>
                <Grid is_flex flexDirection="column" width="210px" height="100px" justifyContents="">
                    <Grid>
                        <Text font-size="12px" margin="0px" height="50px">이젠 괜찮을 법도 해졌지
                            이것저것 겪어봤으니
                            대충 속이 썩을 정도
                            물론 이건 꼭
                            내 얘기뿐만은 아냐 너도
                            아팠겠지 나를 품는 건
                            모두 이성적으로 생각하래 어떻게
                            감정 문제를 이성적으로 판단하겠어
                            내가 없을 너의 하루가 걱정되지만
                            이게 사랑이 아닐 수도 있다는 말이야 내 말은
                        </Text>
                    </Grid>
                </Grid>
                <Grid is_flex flexDirection='column' alignItems='center' width="20px" height="20px" padding="0px">
                    <FavoriteBorderOutlinedIcon sx={{width:"20px", height:"20px"}}/>
                    <Text margin='0'>?</Text>
                </Grid>
        </Grid>
    );
} 


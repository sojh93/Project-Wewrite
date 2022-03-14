//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI


//import Icon
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


//import elements
import { Button, Grid, Input, Image, Text,Chip } from "../elements" 

export default function Post(props) {

    return (
        <Grid is_flex width='100%' flexDirection='column'>
            <Text fontSize="16px" fontWeight='700'>제목이 길면 얼마나 길까?</Text>
            <Grid is_flex justifyContent='space-between' width="100%" gap='10px'>
                <Grid width='80px' is_flex flexDirection='column'>
                    <Image width="80px" height="100px" borderRadius="5px" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjJfMTcz%2FMDAxNjIxNjcwMzA3ODY1.PK5Q_yIQRr3ZyvTO_XhARkEF9aMJ0C1wavUEr2hEEjgg.kfG41tZDQtwvKtpwO7OhRguDv0C_E5JCSfyGnlpi1rEg.JPEG.vicky0170%2Fe6c17e085ded495c098f99cbea98477d.jpg&type=sc960_832"></Image>
                </Grid>
                <Grid is_flex flexDirection="column" width="calc(100% - 80px)" justifyContent='space-between'>
                    <Grid>
                        <Text fontSize="12px" margin="0px">이젠 괜찮을 법도 해졌지
                            이것저것 겪어봤으니
                            대충 속이 썩을 정도
                            물론 이건 꼭
                            내 얘기뿐만은 아냐 너도
                            아팠겠지 나를 품는 건
                        </Text>
                    </Grid>
                    <Grid is_flex alignItems='center' height='30px' justifyContent='space-between'>
                        <Chip>좋아</Chip>
                        <Grid is_flex fontSize='15px' color='#7E7E7E' fontWeight='300'>
                        <Text><ThumbUpOutlinedIcon/></Text>
                        <Text>??</Text>
                        <Text><BookmarkBorderOutlinedIcon/></Text>
                        <Text>???</Text>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    );
} 


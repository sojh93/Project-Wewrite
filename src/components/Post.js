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
            <Text fontSize="16px" fontWeight='700'>{props.title?props.title:''}</Text>
            <Grid is_flex justifyContent='space-between' width="100%" gap='10px'>
                <Grid width='80px' is_flex flexDirection='column'>
                    <Image width="80px" height="100px" borderRadius="5px" src={props.url?props.url:''}/>
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


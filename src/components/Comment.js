//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//import Icon
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 


export default function Comment({children}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid>
            <Grid is_flex  margin='5px' width='310px' gap='5px'>
                {/* <Image width='30px' height='30px' src='https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkQ5wU%2Fbtrd5kEGcBi%2FHo0a7Hmj3V6LxRhxkC2KRk%2Fimg.jpg'/> */}
                <Text><b>nick</b></Text>
                <Grid  width='250px'  height='auto'>
                    <Text>안녕하시오 이건 댓글인데 설마 길게 쓸까? 심지어 영어로...? 그럴리가 없어</Text>
                </Grid>
                <Grid is_flex flexDirection='column' alignItems='center' >
                    <IconButton
                        aria-label="more"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{margin : '0 5px',padding:'0'}}
                    >
                        <MoreHorizIcon />
                    </IconButton>
                    {/* <FavoriteBorderOutlinedIcon  sx={{width:'15px'}}/> */}
                    <Menu
                        id="basic-menu"
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            fontSize:"12px",
                            height : "115px",
                            padding : '0',
                            margin : '0',
                        },
                        }}
                    >
                        <MenuItem sx={{ fontSize : "12px", height:'20px', }} onClick={handleClose}>
                            <Text>수정</Text>
                        </MenuItem>
                        <MenuItem sx={{ fontSize : "12px", height:'20px',}} onClick={handleClose}>
                            <Text>삭제</Text>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
            <Grid margin="0px 40px 10px 40px">
                <Text margin='0px' fontSize="10px" color='gray'>2022년 03월 27일</Text>
            </Grid>
    </Grid>
    );
} 


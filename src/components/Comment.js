//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

//import modules
import { actionCreators as userActions } from "../redux/modules/user";


export default function Comment({children}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [comment, setComment] = useState(0)
    const user_info = {
        user_name: _user.user_name,
        user_id: _user.uid,
        user_profile: _user.user_profile,
      };

      function addUserInfo({ ...user_info, ..._post })
      .then((doc) => {
      let post = { user_info, ..._post, id: doc.id };
      dispatch(addPost(post));
      history.replace("/");
    })
      .catch((err) => {
      console.log("post 작성에 실패했습니다", err);
    });


    return (
        
        <Grid>
            <Grid is_flex  margin='0px 10px' width='310px' gap='5px'>
                <Grid is_flex alignItems='center'>
                    <Image width='30px' borderRadius = '5px' height='30px' src={_user.user_profile}/>
                </Grid>
                <Grid width='250px' height='auto'>
                    <Text fontSize='12px' fontWeight='700'>Nick</Text>
                    <Text>{comment}</Text>
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
                        {/* ... 아이콘 */}
                        <MoreHorizIcon />
                        {/* 아이콘 버튼화 & 위치 선정 */}
                    </IconButton>
                    <Grid is_flex alignItems='center' justifyContent='space-evenly'>
                        <FavoriteBorderOutlinedIcon  sx={{width:'10px'}}/>
                        <Text margin='0 2px 1px 2px' fontSize='10px'>32</Text>
                    </Grid>
                    {/* 아이콘 누르면 나오는 것들 설정 */}
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
                            height : "55px",
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
            <Grid is_flex fontSize="10px" color='gray' margin="0px 40px 10px 40px">
                <Text margin='0px 5px 0px 10px'>2022년 03월 27일</Text><Text margin='0px'>(수정됨)</Text>
            </Grid>
    </Grid>
    );
};
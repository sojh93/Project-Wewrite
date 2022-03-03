//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import {  Grid, Input, Image, Text } from "../elements" 

//import Mui
import Avatar from '@mui/material/Avatar';
import { Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';

//import Icon
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';




// impot Component


//import Actions




const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    React.useEffect(async() => {

    },[]);
    
    return(
            <Grid>
                <Grid position="absolute" top="0px" is_flex alignItems="center" justifyContent='space-between' box-sizing="border-box" padding="0" width ="320px" height='60px' margin='0'  >
                    <div onClick={()=>{navigate('/')}}>
                        <img width={"50px"} alt="instagram letter Logo" src="/Logo/soso.jpeg"/>
                    </div>
                    <Grid is_flex border="0">
                        <Tooltip title="Add Post"><IconButton sx={{width:"50px", height : "50px"}}><FavoriteBorderOutlinedIcon  sx={{ margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
                </Grid>
                <Grid margin="0 0 50px 0"/>
            </Grid>

    );

}


export default Header;
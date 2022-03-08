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
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

// impot Component


//import Actions




const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    React.useEffect(async() => {

    },[]);
    
    return(
            <Grid>
                <Grid position="absolute" top="0px" backgroundColor="#6454ff00" is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="320px" height='60px' margin='0'  >
                    <Grid backgroundColor="#6454ff00"  is_flex border="0">
                        <Tooltip title="장르 고르기"><IconButton sx={{width:"50px", height : "50px"}}><DensityMediumIcon  sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
                    <Grid backgroundColor="#6454ff00"  is_flex border="0">
                        <Tooltip title="알람"><IconButton sx={{width:"50px", height : "50px"}}><NotificationsNoneOutlinedIcon  sx={{ margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
                </Grid>
            </Grid>

    );
    
//     return(
//         <Grid>
//             <Grid position="absolute" top="0px" is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="320px" height='60px' margin='0'  >
//                 <Grid is_flex border="0">
//                     <Tooltip title="뒤로가기"><IconButton sx={{width:"50px", height : "50px"}}><KeyboardArrowLeftIcon  sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
//                 </Grid>
                
//             <Grid margin="0 0 50px 0"/>
//         </Grid>

// );
}


export default Header;
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

export default function Sentence(props) {

    return (
        <Grid is_flex flexDirection='column' margin='50px 5px 5px 5px' width='310px' gap='5px'>
            <Image width='30px' height='30px' src={props.src}/>

            <Grid is_flex alignItems='center'>
            <Grid  width='250px'  height='auto'>
                <Text>{props.contents}</Text>
            </Grid>
            <FavoriteBorderOutlinedIcon  sx={{width:'20px'}}/>
            </Grid>
        </Grid>
    );
} 


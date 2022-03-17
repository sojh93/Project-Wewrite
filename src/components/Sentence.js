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

const Sentence = React.memo((props)=>{
    return (
        <Grid is_flex margin='5px' justifyContent='space-between' width='100%' gap='10px'>
            <Grid is_flex flexDirection='column'>
                <Image border='1px solid #e0e0e0' borderRadius='5px' width='30px' height='30px' src={props.src}/>
                <Grid is_flex alignItems='center' justifyContent='space-evenly'>
                    <FavoriteBorderOutlinedIcon  sx={{width:'10px'}}/>
                    <Text margin='0 2px 1px 2px' fontSize='10px'>{props.paragraphLikesCnt?props.paragraphLikesCnt:'0'}</Text>
                </Grid>
            </Grid>

            <Grid  width='100%' is_flex alignItems='flex-start'>
                <Grid height='auto'>
                    <Text margin='0'>{props.contents}</Text>
                </Grid>
            </Grid>
        </Grid>
    );
}
)

export default Sentence;

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

import { actionCreators as postActions } from "../redux/modules/post";

const Sentence = React.memo((props)=>{
    const dispatch = useDispatch();
    function likeParagraph() {
        dispatch(postActions.likePara(props.paraKey))
    }
    return (
        <Grid is_flex margin='5px' justifyContent='space-between' width='100%' gap='10px'>
            <Grid onClick={likeParagraph} is_flex flexDirection='column'>
                <Image border='1px solid #e0e0e0' borderRadius='5px' width='30px' height='30px' src={props.src}/>
                <Grid is_flex alignItems='center' justifyContent='space-evenly'>
                    <Image width='10px' height='10px' src={props.isLike?'/Icon/heart.png':'/Icon/heart_e.png'}/>
                    <Text margin='0 2px 1px 2px' fontSize='10px'>{props.like?props.like:'0'}</Text>
                </Grid>
            </Grid>

            <Grid  width='100%' is_flex alignItems='flex-start'>
                <Grid height='auto'>
                    <Text white-space='pre-line' margin='0'>{props.contents.split("\n").map((line) => {
                        // if(line.length > 40){
                        //     return (
                        //         <span>
                        //             {line.slice(0,40)}
                        //             <br />
                        //             {line.slice(40,line.lnngth)}
                        //             <br />
                        //         </span>
                        //         );
                        // }
                        return (
                        <span>
                            {line}
                            <br />
                        </span>
                        );
                    })}</Text>
                </Grid>
            </Grid>
        </Grid>
    );
}
)

export default Sentence;

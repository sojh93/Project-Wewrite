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
        <Grid is_flex flexDirection="column" width="300px" height="100px">
            <Grid is_flex align-items="center" justifyContents="center">
                <Image width="100px" height="100px" borderRadius="5px" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjJfMTcz%2FMDAxNjIxNjcwMzA3ODY1.PK5Q_yIQRr3ZyvTO_XhARkEF9aMJ0C1wavUEr2hEEjgg.kfG41tZDQtwvKtpwO7OhRguDv0C_E5JCSfyGnlpi1rEg.JPEG.vicky0170%2Fe6c17e085ded495c098f99cbea98477d.jpg&type=sc960_832"></Image>
                <Grid is_flex flexDirection="column" width="170px" height="100px" justifyContents="">
                    <Text font-size="12px" margin="3px">제목</Text>
                    <Grid><Text font-size="12px" margin="0px" height="50px">첫문장</Text></Grid>
                    <Text font-size="12px" margin="3px">작성자</Text>
                </Grid>
                <Grid width="30px" height="30px" padding="0px">
                    <FavoriteBorderOutlinedIcon sx={{width:"30px", height:"30px"}}/>
                </Grid>
            </Grid>
        </Grid>
    );
} 


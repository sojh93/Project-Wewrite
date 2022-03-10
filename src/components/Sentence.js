//import Library
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI

//import Icon
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

export default function Sentence({ children }) {
    console.log(children);

    return (
        <Grid is_flex margin="5px" width="310px" gap="5px">
            <Image
                width="30px"
                height="30px"
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkQ5wU%2Fbtrd5kEGcBi%2FHo0a7Hmj3V6LxRhxkC2KRk%2Fimg.jpg"
            />
            <Grid width="250px" height="auto">
                <Text>
                    안녕하시오 근데 이거는 한글만 줄 바뀜이 된다는데 진짠가
                    안되는데 영어는 안되나..
                </Text>
            </Grid>
            <FavoriteBorderOutlinedIcon sx={{ width: "15px" }} />
        </Grid>
    );
}

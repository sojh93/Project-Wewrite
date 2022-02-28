//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI


//import Icon


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

export default function Post({children}) {
    console.log(children);

    return (
        <Grid is_flex flexDirection="column" justifyContents="center"  height="200px">
            <Text margin="5px">현재 장소 이름</Text>
            <Grid is_flex align-items="center" justifyContents="center">
                <Image width="150px" borderRadius="5px" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjJfMTcz%2FMDAxNjIxNjcwMzA3ODY1.PK5Q_yIQRr3ZyvTO_XhARkEF9aMJ0C1wavUEr2hEEjgg.kfG41tZDQtwvKtpwO7OhRguDv0C_E5JCSfyGnlpi1rEg.JPEG.vicky0170%2Fe6c17e085ded495c098f99cbea98477d.jpg&type=sc960_832"></Image>
                <Grid>
                    <Text font-size="12px" margin="3px">이름</Text>
                    <Text font-size="12px" margin="3px">사업장 형태</Text>
                    <Text font-size="12px" margin="3px">주소</Text>
                    <Text font-size="12px" margin="3px">전화번호</Text>
                    <Text font-size="12px" margin="3px">사이트</Text>
                    <Text font-size="12px" margin="3px">영업 시간</Text>
                </Grid>
            </Grid>
        </Grid>
    );
} 


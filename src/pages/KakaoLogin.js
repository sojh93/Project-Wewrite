//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate,useParams,useLocation } from "react-router-dom";
import qs from 'qs';

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component

import instance from "../shared/Request";




const KakaoLogin = () => {
    const router = useLocation();
    // 카카오에서 준 인증코드

    React.useEffect(() => {
        console.log(router.search.split('=')[1])
        instance({
            method : "post",
            url : "/login/kakaoLogin",
            data : {kakaoToken:router.search.split('=')[1]},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>console.log(res));
    }, [])



    return (
        <>
            카카오 로그인 중
        </>
    )
    }


export default KakaoLogin
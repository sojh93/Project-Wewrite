//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate,useParams,useLocation } from "react-router-dom";

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component

import instance from "../shared/Request";
import axios from "axios";

const kakao = axios.create({
	baseURL: "https://kauth.kakao.com",
        headers : {
                "content-type" : "application/x-www-form-urlencoded;charset=utf-8",
        }
});


const KakaoLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const router = useLocation();
    // 카카오에서 준 인증코드

    React.useEffect(() => {
        console.log(router.search.split('=')[1])

        const data = {
            grant_type : "authorization_code",
            client_id : "43268aa6f88af6282a341e3b61b9a761",
            redirect_uri : "http://localhost:3000/login/kakaoLogin",
            code : router.search.split('=')[1],
            client_secret : "rPfOmfcisQud180j3Kyp9jxytSXQuTrH",
        }

        
        const queryStringBody = Object.keys(data)
            .map(k=> encodeURIComponent(k)+"="+encodeURI(data[k]))
            .join("&")

        kakao({
            method : "post",
            url : "/oauth/token",
            data :queryStringBody,
            headers : {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        }).then(res=>{
            console.log(res);
            instance({
                method : "post",
                url : "/login/kakaoLogin",
                data :{kakaoToken : res.data.access_token},
                headers : {
                }
            }).then(res=>{
                console.log(res.headers['X-AUTH-TOKEN']);
                
            });
        })

    }, [])



    return (
        <>
            카카오 로그인 중
        </>
    )
    }


export default KakaoLogin
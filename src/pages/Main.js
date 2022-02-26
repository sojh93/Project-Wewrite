//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions
import { actionCreators as mapActions } from "../redux/modules/map";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Post from '../components/Post';

// import KakaoMapScript from '../shared/kakaomap';
import Bottom from '../components/Bottom';




function Main(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { kakao } = window;

    const mapref = React.useRef()
    console.log(mapref);

    
    useEffect(() => {
        
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.551146405438494, 126.98824852791579),
        level: 5
    };
    
    const map = new kakao.maps.Map(container, options);
    
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();  
    ////////////클릭한 곳에 마커 찍히는 코드
    var marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
        
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng; 
        
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);
        
        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';
        
        dispatch(mapActions.setCoor(latlng.getLat(),latlng.getLng()));
        console.log(message);
        
    });

    kakao.maps.event.addListener(map, 'dragend', function() {        
    
        // 지도 중심좌표를 얻어옵니다 
        var latlng = map.getCenter(); 
        
        var message = '변경된 지도 중심좌표는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';
        
        console.log(message);
        
    });
    }, []);

    return (
        <Grid wrap >   

                <div ref={mapref} id='map' style={{
                    width: '320px',
                    height: "calc(100vh - 50px)",
                    zIndex : "1",
                }}/>
                
                <Grid position="absolute" zIndex="2" bottom="49px" width="320px" height="200px" backgroundColor="white">
                    <Post>하이?</Post>
                </Grid>


                <Bottom/>

        </Grid>
    );
}




export default Main;
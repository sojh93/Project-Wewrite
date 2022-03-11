import React from "react";

import styled from "styled-components";

// Components

// elements

// 채팅 관련 함수들 가져오기

// 쿠키
import { getCookie } from "../shared/Cookie";

// 리덕스
import { useDispatch, useSelector } from "react-redux";

// 소켓 통신
import Stomp from "stompjs";
import SockJS from "sockjs-client";

// 채팅 방 컴포넌트
const ChattingRoom = (props) => {
    // 소켓 통신 객체
    const sock = new SockJS("http://3.36.75.74:8080/ws-stomp");
    const ws = Stomp.over(sock);

    // 방 제목 가져오기
    const category = "temp";
    const roomName = "name";
    const postId = "postId";
    console.log(postId);
    // 토큰
    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJpYXQiOjE2NDY5MzQyOTksImV4cCI6MTY0NzE5MzQ5OX0.y-DfDDCqCLPQMYDpG_8ypZlSywc1_8-TivowUJp4EIk";
    var headers = {
        Authorization: token,
    };
    const dispatch = useDispatch();

    // 보낼 메시지 텍스트
    const messageText = "message";
    // sender 정보 가져오기
    let sender = getCookie("WW_user");

    React.useEffect(() => {
        wsConnectSubscribe();

        return () => {};
    }, [postId]);

    // 웹소켓 연결, 구독
    function wsConnectSubscribe() {
        try {
            ws.connect(headers, () => {
                ws.subscribe(
                    `/chat/message/4`,
                    (data) => {
                        // const postId = JSON.parse(79);
                        const newMessage = JSON.parse(data.body);
                    },
                    headers
                );
            });
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }

    // 연결해제, 구독해제
    function wsDisConnectUnsubscribe() {
        try {
            ws.disconnect(() => {
                ws.unsubscribe("sub-0");
            }, headers);
        } catch (error) {
            console.log(error);
        }
    }

    // 웹소켓이 연결될 때 까지 실행하는 함수
    function waitForConnection(ws, callback) {
        setTimeout(
            function () {
                // 연결되었을 때 콜백함수 실행
                if (ws.ws.readyState === 1) {
                    callback();
                    // 연결이 안 되었으면 재호출
                } else {
                    waitForConnection(ws, callback);
                }
            },
            1 // 밀리초 간격으로 실행
        );
    }

    // 메시지 보내기
    function sendMessage() {
        try {
            // token이 없으면 로그인 페이지로 이동
            if (!token) {
                alert("토큰이 없습니다. 다시 로그인 해주세요.");
            }
            // send할 데이터
            const data = {
                type: "TALK",
                postId: postId,
                nickName: sender,
                userId: "1",
                paragraph: messageText,
            };
            // 빈문자열이면 리턴
            if (messageText === "") {
                return;
            }
            // 로딩 중
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", headers, JSON.stringify(data));
                console.log(ws.ws.readyState);
            });
        } catch (error) {
            console.log(error);
            //console.log(ws.ws.readyState);
        }
    }

    return (
        <>
            <button onClick={sendMessage()}>temp</button>
        </>
    );
};
export default ChattingRoom;

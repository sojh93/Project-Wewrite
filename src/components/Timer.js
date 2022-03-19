import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../shared/Cookie";
import instance from "../shared/Request";

const token = getCookie('WW_user');
const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

const Timer = (props) => {
    const _post = useSelector(state => state.post);
    const postKey = _post.thisPost.postKey
    // 아무것도 입력하지 않으면 undefined가 들어오기 때문에 유효성 검사부터..
    const tempHour = props.hour ? parseInt(props.hour) : 0;
    const tempMin = props.min ? parseInt(props.min) : 15;
    const tempSec = props.sec ? parseInt(props.sec) : 0;
    // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
    const initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);
    const interval = useRef(null);

    const [hour, setHour] = useState(padNumber(tempHour, 2));
    const [min, setMin] = useState(padNumber(tempMin, 2));
    const [sec, setSec] = useState(padNumber(tempSec, 2));

    useEffect(() => {
        interval.current = setInterval(() => {
        initialTime.current -= 1;
        setSec(padNumber(initialTime.current % 60, 2));
        setMin(padNumber(parseInt(initialTime.current / 60), 2));
        setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
        }, 1000);
        return () => clearInterval(interval.current);
    }, []);

    // 초가 변할 때만 실행되는 useEffect
    // initialTime을 검사해서 0이 되면 interval을 멈춘다.
    useEffect(() => {
        if (initialTime.current <= 0) {
        clearInterval(interval.current);
        instance({
            method : "post",
            url : `/cancelIsWriting/${postKey}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'Authorization' : token,
            }
        }).then(res=>{
            console.log(res);
        });
        }
    }, [sec]);

    return (
        <>
        {min} : {sec}
        </>
    );
};

export default Timer;
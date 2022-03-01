//import Library
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import Actions
//import elements
import { Button, Grid, Input, Image, Text } from "../elements";
//import Icon
// impot Component
//import Actions
//import axios
import instance from "../shared/Request";
// import Header from "../components/Header";
import HorizonLine from "../components/HorizonLine";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import SwitchSelector from "react-switch-selector";

const Mypage = () => {

  const options = [
    {
        label: <span>본인 작품</span>,
        value: {
             foo: true
        },
        selectedBackgroundColor: "#0097e6",
    },
    {
        label: "저장된 작품",
        value: "bar",
        selectedBackgroundColor: "#fbc531"
    }
 ];
 
 const onChange = (newValue) => {
     console.log(newValue);
 };
 
 const initialSelectedIndex = options.findIndex(({value}) => value === "bar");

  return (
    <Grid wrap height="100%">
      {/* <Header></Header> */}
      <Grid
        // is_flex
        height="30px"
        // width="120px"
        margin="20px 0px 0px 15px"
        width="15%"
        flexDirection="row"

        // background-color="#e9ecef"
      >
        {" "}
        로고
      </Grid>
      <Grid is_flex width="15%" flexDirection="row">
        <AiOutlineHeart />
      </Grid>
      <HorizonLine />
      <Grid is_flex flexDirection="column" height="calc(30% - 121px)" is_scroll padding="0">
        <Grid is_flex flexDirection="row" margin="5px 5px 0 0">
          <CgProfile size="100" style={{ width: "30%" }} padding="0" margin="0"/>
          <Grid
            is_flex
            height="30px"
            margin="0 0 0 10px"
            width="43%"
            flexDirection="row"
          >
            닉네임
          </Grid>
          <Grid
            is_flex
            height="55px"
            textAlign="center"
            margin="18px 0 0 35px"
            width="40%"
            flexDirection="row"
            padding="0"
          >
            프로필 수정하기
          </Grid>
        </Grid>
        <Grid is_flex flexDirection="column" width="100%">
            <Grid
              is_flex
              height="30px"
              margin="0 5px 0px 80px"
              flexDirection="column"
            >
              소개
            </Grid>
          <Grid
            is_flex
            height="30px"
            margin="5px 5px 0px 80px"
            flexDirection="column"
          >
            참여소설 {} 작성문장 {}
          </Grid>
        </Grid>
        <HorizonLine />
        <div className="your-required-wrapper" style={{width: 150, height: 40, margin: "auto"}}>
        <SwitchSelector
            onChange={onChange}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
            
        />
    </div>
      </Grid>
      
     </Grid>
     
     

     
    
  );
};

export default Mypage;

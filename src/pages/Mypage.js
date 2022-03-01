//import Library
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions

//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

//import Icon
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import SwitchSelector from "react-switch-selector";

// impot Component
import Header from "../components/Header";

//import Actions
//import axios
import instance from "../shared/Request";
import HorizonLine from "../components/HorizonLine";


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
      <Header/>
      <Grid wrap  padding="0" width="100%">
        <Grid height="110px" flexDirection="row" margin="5px 5px 0 0" width="100%">
          <CgProfile size="90" style={{ width: "40%" }} padding="0" margin="15px 0 0 0"/>
          <Grid
            is_flex
            height="30px"
            margin="5px 0 0 0"
            width="80px"
            flexDirection="row"
          >
            닉네임
          </Grid>
          <Grid
              is_flex
              height="30px"
              margin="40px 0 0 0"
              width="20%"
              

            >
              소개
            </Grid>
            <Grid
            is_flex
            height="55px"
            textAlign="center"
            margin="15px 0 0 0"
            width="25%"
            flexDirection="row"
            padding="0"
          >
          <Button>프로필 수정하기</Button>
          </Grid>
        </Grid>
       
        
        <Grid is_flex flexDirection="column" width="100%">
            
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

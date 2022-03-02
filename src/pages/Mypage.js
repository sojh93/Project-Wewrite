//import Library
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SwitchSelector from "react-switch-selector";

//import Actions

//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

//import Icon
import { CgProfile } from "react-icons/cg";

// impot Component
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import HorizonLine from "../components/HorizonLine";



const Mypage = () => {

  const options = [
    {
        label: "본인 작품",
        value: "userPost",
        width : "100px",
        fontSize : "10px"
    },
    {
        label: "저장된 작품",
        value: "bookmark",
        width : "100px",

    }
  ];
  
  const onChange = (newValue) => {
      console.log(newValue);
  };
  
  const initialSelectedIndex = options.findIndex(({value}) => value === "userPost");

  return (
    <Grid wrap>
      <Header/>
      <Grid is_flex flexDirection="column" height="150px" width="320px" is_scroll padding="0">
        <Grid is_flex height="130px" alignItems="center" justifyContent="space-between" margin="5px 5px 0 0">
          <CgProfile size="70px" style={{ width: "30%" }} padding="0" margin="0"/>
          <Grid
            is_flex
          >
            <Grid width="180px" is_flex flexDirection="column" justifyContent="center">
              <Text margin="5px 5px 0px 5px" fontSize="10px">닉네임</Text>
              <Text margin="5px" fontSize="8px">소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개</Text>
              <Text margin="0px 5px 5px 5px" fontSize="10px">참여 소설</Text>
            </Grid>
          </Grid>
          <Grid
            textAlign="center"
          >
            <Button width="50px" padding="2px"><Text margin="0px" fontSize="9px">프로필 수정</Text></Button>
          </Grid>
        </Grid>
        <Grid is_flex flexDirection="column" width="100%">

        </Grid>
        <Grid margin="15px" width="100px" height="30px">
                <SwitchSelector
                    onChange={onChange}
                    options={options}
                    initialSelectedIndex={initialSelectedIndex}            
                />
            </Grid>
      </Grid>
      <Bottom thisPage="myPage"/>
    </Grid>

    
  );
};

export default Mypage;

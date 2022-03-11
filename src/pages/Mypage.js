//import Library
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import SwitchSelector from "react-switch-selector";

//import Actions

//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

//import Icon
import { CgProfile } from "react-icons/cg";

// impot Component
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import Books from "../components/Books";

const Mypage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _user = useSelector(state => state.user);
  const _post = useSelector(state => state.post);

  const pageUserKey = useParams().userKey;
  console.log(pageUserKey);

  const options = [
    {
      label: <span>본인 작품</span>,
      value: {
        foo: true,
      },
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "저장된 작품",
      value: "bar",
      selectedBackgroundColor: "#fbc531",
    },
  ];

  const onChange = (newValue) => {
    console.log(newValue);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "bar"
  );

  const moveHref = () => {
  };

  return (
    <Grid wrap>
      <Header thisPage='userPage'/>
      <Grid
        is_flex
        flexDirection="column"
        width="100%"
        marginTop='60px'
      >
        
      </Grid>
      <Grid is_flex width="100%" alignItems="center">
        {/* 스위치 부분 - 본인작품 / 저장된 작품*/}
        <div className="your-required-wrapper"
          style={{
            width: 160,
            height: 30,
            margin: "auto",
          }}
        >
          <SwitchSelector
            onChange={onChange}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
          />
        </div>
        </Grid>
        <Books>
          
        </Books>
      <Bottom thisPage="myPage" />
    </Grid>
  );
};

export default Mypage;

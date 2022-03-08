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
import Books from "../components/Books";

const Mypage = () => {
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
        document.location.href = "/Mywrite";
    };

    return (
        <Grid wrap>
            <Header />
            <Grid
                is_flex
                flexDirection="column"
                height="140px"
                width="320px"
                is_scroll
                padding="0"
            >
                <Grid
                    is_flex
                    height="130px"
                    alignItems="center"
                    justifyContent="space-between"
                    margin="5px 5px 0 0"
                    borderBottom="1px dashed #d3d3d3"
                >
                    <CgProfile
                        size="70px"
                        style={{ width: "30%" }}
                        padding="0"
                        margin="0"
                    />
                    <Grid is_flex>
                        <Grid
                            width="180px"
                            is_flex
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Text margin="5px 5px 0px 5px" fontSize="10px">
                                닉네임
                            </Text>
                            <Text margin="5px" fontSize="8px">
                                소개
                            </Text>
                            <Text margin="0px 5px 5px 5px" fontSize="10px">
                                참여 소설
                            </Text>
                        </Grid>
                    </Grid>
                    <Grid textAlign="center">
                        <Button width="50px" padding="2px" onClick={moveHref}>
                            <Text margin="0px" fontSize="9px">
                                프로필 수정
                            </Text>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid is_flex width="100%" alignItems="center">
                {/* 스위치 부분 - 본인작품 / 저장된 작품*/}
                <div
                    className="your-required-wrapper"
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
            <Books></Books>
            <Bottom thisPage="myPage" />
        </Grid>
    );
};

export default Mypage;

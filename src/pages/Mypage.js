//import Library
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import "./styles.css";

//import Actions

//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

//import Icon
import { CgProfile } from "react-icons/cg";

// impot Component
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import NavigationBar from "../components/NavigationBar";

const Mypage = () => {
    const moveHref = () => {
        document.location.href = "/Mywrite";
    };

    const [closed, setClosed] = useState(false);

    const handleMoreBtn = () => {
        setClosed(!closed);
    };

    return (
        <Grid wrap>
            <Header />
            <Grid height="140px" width="320px" is_scroll padding="0">
                <Grid
                    is_flex
                    height="130px"
                    alignItems="center"
                    justifyContent="center"
                    margin="20px 5px 0 0"
                >
                    <CgProfile
                        size="120px"
                        style={{ width: "30%" }}
                        padding="0"
                        margin="0"
                    />
                </Grid>
                <Grid is_flex>
                    <Grid
                        width="320px"
                        is_flex
                        flexDirection="column"
                        alignItems="center"
                        padding="0"
                    >
                        <Text margin="5px 5px 0px 5px" fontSize="12px">
                            호칭
                        </Text>
                        <Text margin="5px 5px 0px 5px" fontSize="24px">
                            닉네임
                        </Text>
                        <Text margin="5px" fontSize="8px" width="150px">
                            <p className={closed ? "" : "close"}>
                                소개글: 안녕하세요 저는 지중해의 몰타 섬이
                                고향인 말티즈라고 해요. 먹을 걸 내놓아라. 혹시
                                알아? 귀여워질지? 난 참지 않아!!
                            </p>
                        </Text>
                    </Grid>
                </Grid>
                <NavigationBar />
            </Grid>

            <Bottom thisPage="myPage" />
        </Grid>
    );
};

export default Mypage;

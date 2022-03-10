import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { Grid, Text, Image } from "../elements";

const BookILike = () => {
    return (
        <Grid wrap justifyContent="space-between" margin="5px 0 5px 0">
            <Grid is_flex width="320px" is_scroll>
                <Image
                    margin="0 0 0 5px"
                    width="100%"
                    size="150"
                    height="90px"
                ></Image>
                <Grid is_flex height="100px">
                    <Text
                        display="flex"
                        margin="0 0 0 10px"
                        padding="0"
                        fontSize="7px"
                        lineHeight="12px"
                        width="210px"
                        alignItems="center"
                        textAlign="left"
                    >
                        네이버, 카카오, 라인, 쿠팡, 배달의 민족, 당근마켓, 토스,
                        중고나라, 고양이, 강아지, 네이버, 카카오, 라인, 쿠팡,
                        배달의 민족, 스타트업 넘 좋음. 알고리즘 지못미...{" "}
                    </Text>
                </Grid>
                <Grid
                    is_flex
                    width="30px"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign="center"
                    alignItems="center"
                    height="100px"
                >
                    <AiOutlineHeart />
                    <Text fontSize="12px" textAlign="center">
                        갯수
                    </Text>
                </Grid>
            </Grid>
            <Grid is_flex margin="0 0 0 10px" width="320px" padding="0">
                <Grid is_flex justifyContent="center" padding="0" width="58px">
                    <Text fontSize="12px" margin="0">
                        책이름
                    </Text>
                </Grid>
                <Grid is_flex width="200px" margin="0 0 0 10px">
                    <Text margin="0" fontSize="12px">
                        시간
                    </Text>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BookILike;

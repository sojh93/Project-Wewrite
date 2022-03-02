import React from "react";

// import elements
import { Grid, Text, Image } from "../elements";

//import Icon
import { CgProfile } from "react-icons/cg";

const News = () => {
  return (
    <Grid
      is_flex
      flexDirection="column"
      height="90px"
      width="320px"
      is_scroll
      padding="0"
      borderBottom="1px dashed #d3d3d3"
    >
      <Grid
        is_flex
        height="90px"
        alignItems="center"
        justifyContent="space-between"
        margin="5px 5px 0 0"
      >
        <CgProfile
          size="60px"
          style={{ width: "30%" }}
          padding="0"
          margin="0"
        />
        <Grid is_flex>
          <Grid
            width="200px"
            is_flex
            flexDirection="column"
            justifyContent="center"
            margin="0 15px 0 0"
          >
            <Text margin="5px 5px 0px 5px" fontSize="10px">
              닉네임 님이 소설 OOO를 수정하고 있습니다.
            </Text>
            {/* <Text margin="5px" fontSize="8px">
              소개
            </Text> */}
            <Text margin="0px 5px 5px 5px" fontSize="10px">
              0시간 전
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default News;

import React from "react";

// import Elements
import { Grid, Button, Text, Image} from "../elements";

//import Components
import Bottom from "../components/Bottom";

//import Image
import blank from "../image/blank.jpg";

const NoticeBanner = () => {
    

    return(
    <Grid wrap>
        <Grid is_flex width="335px" flexDirection="column" margin="20px 0 0 0" height="220px" backgroundColor="gray" alignItems="center" justifyContent="center">
           <Image is_square color="gray"/>
               <Text color="white">
                   런칭 기념 상품증정
               </Text>
               <Text color="white">
                   애플리케이션 오픈 이벤트
               </Text>
               <Text color="white">
                   더 알아보기 &#62;
               </Text>
        </Grid>
        <Bottom/>


    </Grid>
    );
};

export default NoticeBanner;
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
        <Grid is_flex width="335px" flexDirection="column" margin="20px 0 0 27px" height="220px" justifyContent="left" border="1px solid black">
           <Image is_square width="335px" height="220px" src={blank} alt="blank" display="flex" border="1px solid black"/>
               <Grid is_flex flexDirection="column" margin="10px 0 0 22px">
               <Text color="black">
                   런칭 기념 상품증정
               </Text>
               <Text color="black" fontSize="18px">
                   애플리케이션 오픈 이벤트
               </Text>
               </Grid>
               <Grid is_flex>
               <Text color="black" margin="120px 0 0 22px" fontSize="11px">
                   더 알아보기 &#62;
               </Text>
               </Grid>
        </Grid>
        <Bottom/>


    </Grid>
    );
};

export default NoticeBanner;
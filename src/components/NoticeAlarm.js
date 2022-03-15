import React from "react";

// import Elements
import { Grid, Button, Text, Image} from "../elements";

//import Components
import Bottom from "../components/Bottom";

//import Image


const NoticeAlarm = () => {
    

    return(
    
    <Grid wrap>
        <Grid is_flex width="390px" margin="0" height="80px" borderBottom="1px solid gray">
            <Grid is_flex width="40px" height="79.8px" flexDirection="column" margin="0 0 0 20px" padding="0" justifyContent="center">
            <Image is_square backgroundColor="gray" width="27px" height="27px" padding="0"/>
            </Grid>
            <Grid is_flex flexDirection="column" border="none" margin="12px 0 0 10px" height="60px" width="250px">
            <Text fontSize="18px" textWeight="bold" border="none" margin="0">알림</Text>
            <Text fontSize="14px" margin="5px 0 0 0">알림내용</Text>
            </Grid>
        </Grid>
        <Bottom/>


    </Grid>
    );
};

export default NoticeAlarm;
import React from "react";

// import Elements
import { Grid, Text, Image} from "../elements";

//import Components



const NoticeAlarm = (props) => {
    

    return(
    
    <Grid>
        <Grid is_flex width="100%" margin="0" height="80px" borderBottom="1px solid gray">
            <Grid is_flex width="30px" height="79px" flexDirection="column" margin="0 0 0 10px" padding="0" justifyContent="center">
            <Image is_square backgroundColor="gray" src={props.src} width="27px" height="27px" padding="0"/>
            </Grid>
            <Grid is_flex flexDirection="column" border="none" margin="12px 0 0 10px" height="60px" width="calc(100% - 40px)">
            {/* <Text fontSize="18px" textWeight="bold" border="none" margin="0">알림</Text> */}
            <Text fontSize="14px" margin="5px 0 0 0">{props.msg}</Text>
            </Grid>
        </Grid>
      


    </Grid>
    );
};

export default NoticeAlarm;
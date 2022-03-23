import React from "react";

// import Elements
import { Grid, Button, Text, Image} from "../elements";

//import Components
import Bottom from "../components/Bottom";



const NoticeBanner = () => {
    

    return(
    <Grid>
        <Grid is_flex width="100%" flexDirection="column" margin="20px 0" height="220px" justifyContent="left" border="1px solid black">
            <Image width="100%" height="220px" src='/banner/event.png'/>

        </Grid>
        
    </Grid>
    
    );
};

export default NoticeBanner;
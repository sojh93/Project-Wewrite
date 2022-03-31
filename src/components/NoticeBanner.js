import React from "react";

// import Elements
import { Grid, Button, Text, Image} from "../elements";

//import Components
import Bottom from "../components/Bottom";



const NoticeBanner = () => {
    

    return(
    <Grid>
        <Grid is_flex width="100%" flexDirection="column" margin="20px 0" height="90px" justifyContent="left" border="1px solid black">
            <Image  onClick={()=>{window.open("https://forms.gle/mDoHthCZaxLt4js87", '_blank')}} width="100%" height="90px" src='/banner/mainBanner.png'/>

        </Grid>
        
    </Grid>
    
    );
};

export default NoticeBanner;
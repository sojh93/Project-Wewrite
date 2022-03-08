import React from "react";
import { SwiperSlide } from "swiper/react";
import { Grid, Image,Text } from "../elements";

const Paragraph = (props) => {

    return(
        
        <Grid width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image width='100%' height='44px' src={props.src}/>
            <Grid height='24px'><Text margin='3px' width='auto' fontSize='10px' color='black'>{props.nick}</Text></Grid>
        </Grid>
        
    )
}

export default Paragraph;
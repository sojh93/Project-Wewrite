import React from "react";
import { SwiperSlide } from "swiper/react";
import { Grid, Image,Text } from "../elements";

const Paragraph = (props) => {

    const charLimit = (text, limit) =>{
        return text.slice(0,limit)
    }

    return(
        
        <Grid width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image width='100%' height='50px' src={props.src}/>
            <Grid height='24px'><Text margin='3px' width='auto' fontSize='10px' color='black'>{props.nick.length > 6 ? charLimit(props.nick,5)+'...' : props.nick}</Text></Grid>
        </Grid>
        
    )
}

export default Paragraph;
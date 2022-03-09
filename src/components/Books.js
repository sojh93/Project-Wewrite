import React from "react";
import { SwiperSlide } from "swiper/react";
import { Grid, Image,Text,Chip } from "../elements";

const Books = (props) => {

    return(
        
        <Grid width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image width='100%' minHeight='140px' maxHeight='150px' height='150px' src={props.src}/>

            <Grid width='100%' height='26px' is_flex alignItems='flex-start'>
                <Text margin='3px' width='auto' fontSize='16px' color='black'>
                    {props.title}
                    </Text>
            </Grid>
            <Grid margin='2px' width='100%' is_flex alignItems='flex-start'>
                <Chip >장르</Chip>
            </Grid>
            
        </Grid>
        
    )
}

export default Books;
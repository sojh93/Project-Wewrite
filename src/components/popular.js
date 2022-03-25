import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Image,Text, Chip } from "../elements";



const Popular = React.memo((props) => {
    const navigate=useNavigate();
    const colors = ['#D3A975','#FFD3D3','#95BE8E','#6454A8','#FFF6A5','#FFF1FE','#D0C66D','#AD85AA','#FFE600','#570051'];

    return(
        <Grid onClick={()=>{navigate(`/postdetail/${props.postKey}`)}} position='relative' borderRadius='5px' width='90%' height='130px' is_flex flexDirection='column' alignItems='center'>
            <Image position='absolute' left='30px' width='30px' height='47px' src='/Icon/bookmark_post.png'/>
            <Grid is_flex alignItems='center' justifyContent='center' width='100%' borderRadius='5px 5px 0 0' height='90px' backgroundColor={colors[parseInt(Math.random() * 10 % colors.length)]}>
                <Text fontSize='12px' fontWeight='400'>{props.comment}</Text>
            </Grid>

            <Grid width='100%' height='40px' borderRadius='0 0 5px 5px' is_flex alignItems='center'>
                <Text marginLeft='20px' fontSize='14px' fontWeight='500'>{props.title}</Text>
            </Grid>
        </Grid>
        
    )
}
)

export default Popular;
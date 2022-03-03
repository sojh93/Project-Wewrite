import React from "react";

// import elements
import { Grid, Image } from "../elements";

// import Components
import HorizonLine from"./HorizonLine";

// import default image
import book1 from "../image/SleepingDog.jpg";
import book2 from "../image/manTrainingCat.png";
import book3 from "../image/BeingExistAndTime.jpg";
import book4 from "../image/KingMakingTheory.jpg";
import book5 from "../image/Ajeossi.png";
const Books = (props) => {



    return(
    <>
    <Grid is_flex className="book" justifyContent="space-around" width="100%" margin="30px 0 0 0" height="75px" borderBottom="1.5px solid black">
        <Grid is_flex height="70px" width="20%">
            <Image src={book1} width="70px" height="70px"/>
        </Grid>
        <Grid is_flex height="70px" width="20%">
            <Image src={book2} width="70px" height="70px"/>
        </Grid>
    </Grid>
    <Grid is_flex className="book" justifyContent="space-around" width="100%" margin="30px 0 0 0" height="75px" borderBottom="1.5px solid black">
        <Grid is_flex height="70px" width="20%">    
            <Image src={book3} width="70px" height="70px"/>
        </Grid>
        <Grid is_flex height="70px" width="20%">    
            <Image src={book4} width="70px" height="70px"/>
        </Grid>
        <Grid is_flex height="70px" width="20%">    
            <Image src={book5} width="70px" height="70px"/>
        </Grid>
        
    </Grid>
    </>
    )
}

export default Books;
import React from "react";

// import elements
import { Grid, Text, Image } from "../elements";

// import Components
import Header from "../components/Header";
import News from "../components/News";


const NewsList = () => {


    return (
    <Grid wrap>
        <Header/>
        <News/>
    </Grid>
    )
}

export default NewsList;
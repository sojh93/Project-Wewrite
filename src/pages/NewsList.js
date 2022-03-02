import React from "react";

// import elements
import { Grid, Text, Image } from "../elements";

// import Components
import Header from "../components/Header";
import News from "../components/News";
import Bottom from "../components/Bottom";


const NewsList = () => {


    return (
    <Grid wrap>
        <Header/>
        <News/>
        <Bottom/>
    </Grid>
    )
}

export default NewsList;
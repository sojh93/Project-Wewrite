//lodash
import React from "react";
import _ from "lodash";

const MyLoash = (func,input) =>{
    const debounce = _.debounce((k) =>  {
        console.log(func);
    }
    , 1000);
    
    const keyPress = React.useCallback(debounce, []);

    keyPress(input);
}

export default MyLoash
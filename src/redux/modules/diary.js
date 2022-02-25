import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";

//API
import instance from "../../shared/Request";

//action
const TEST = "TEST";

//action creatos
const testAction = createAction(TEST, (test) => ({ test }));

//initialState
const initialState = {
    list : [],
};


//middleware actions
const Test=() =>{
    return async function (dispatch,getState){
        
    }
}

//reducer
export default handleActions(
    {
        [TEST]: (state, action) =>
        produce(state, (draft) => {
            
        }),
    },
    initialState
);


//action creator export
const actionCreators = {
    Test,

};

export { actionCreators };
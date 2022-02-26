import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";

//API
import instance from "../../shared/Request";

//action
const SET_COOR = "SET_COOR";

//action creatos
const set_coor = createAction(SET_COOR, (coor) => ({ coor }));

//initialState
const initialState = {
    coor : [0,0],
};


//middleware actions
const setCoor=(x,y) =>{
    return async function (dispatch,getState){
        console.log(x,y);
    }
}

//reducer
export default handleActions(
    {
        [SET_COOR]: (state, action) =>
        produce(state, (draft) => {
            
        }),
    },
    initialState
);


//action creator export
const actionCreators = {
    setCoor,

};

export { actionCreators };
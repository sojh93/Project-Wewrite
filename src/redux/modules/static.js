//redux
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";

//action
const MODAL_OPEN = "MODAL_OPEN";
const LOGIN_CHECK ="LOGIN_CHECK";

//action creatos

const modalOpen = createAction(MODAL_OPEN, (is_open) => ({ is_open }));
const loginCheck = createAction(LOGIN_CHECK, () => ({ }));


//initialState
const initialState = {
    modal : false,
    LoginModal : true,
};


//middleware actions
const openMadal=(is_open) =>{
    return async function (dispatch,getState){
        dispatch(modalOpen(!is_open));
        console.log(!is_open)
    }
}

const idCheck=() =>{
    return async function (dispatch,getState){
        dispatch(loginCheck());
        setTimeout(()=>{
            dispatch(loginCheck());
        },5000)
    }
}

//reducer
export default handleActions(
    {
        [MODAL_OPEN]: (state, action) =>
        produce(state, (draft) => {
            draft.modal = action.payload.is_open;
        }),
        [LOGIN_CHECK]: (state, action) =>
        produce(state, (draft) => {
            draft.LoginModal = !draft.LoginModal;
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    openMadal,
    idCheck,

};

export { actionCreators };
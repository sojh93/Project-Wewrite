import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import instance from "../../shared/Request";

//action
const GET_POST = "GET_POST";

//action creatos
const getPost = createAction(GET_POST, (post_data) => ({ post_data }));

//initialState
const initialState = {
    Post_list : [],
};


//middleware actions
const get=() =>{
    return async function (dispatch,getState){
        instance({
            method : "post",
            url : "/user/logIn",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            const token = res.headers;


            // dispatch(set_user(""));
        });
    }
}

//reducer
export default handleActions(
    {
        [GET_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.list = [...action.payload.Post_list];
        }),
        
    },
    initialState
);


//action creator export
const actionCreators = {
    get,

};

export { actionCreators };
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie,setCookie,deleteCookie } from "../../shared/Cookie";

//API
import instance from "../../shared/Request";
import { set } from "lodash";

//action
const SET_USER = "SET_USER";
const DEL_USER = "DEL_USER";

//action creatos
const set_user = createAction(SET_USER, (user_data) => ({ user_data }));
const del_user = createAction(DEL_USER, () => ({  }));

//initialState
const initialState = {
    is_login : false,
    user : {},
};


//middleware actions
const signup=(user_data) =>{
    return async function (dispatch,getState){
        instance({
            method : "post",
            url : "/user/signup",
            data : user_data,
            headers : {
                "Content-Type": "multipart/form-data"
            }
        }).then(res=>{
            console.log(res);
            window.location.assign('/login');
        });
        
    }
}
const login=(user_data) =>{
    return async function (dispatch,getState){
        
        instance({
            method : "post",
            url : "/user/login",
            data : user_data,
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            const token = res.headers.authorization;
            setCookie('WW_user',token);
            const userInfo={...res.data}
            dispatch(set_user(userInfo));
            window.location.assign('/');
            
        });
        
    }
}
const check=(test) =>{
    return async function (dispatch,getState){

        instance({
            method : "post",
            url : "/user/myInfo",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                "X-AUTH-TOKEN" : test
            }
        }).then(res=>{
            console.log(res.data);


            // dispatch(set_user(""));
        });
    }
}
const logout=() =>{
    return async function (dispatch,getState){
        deleteCookie('WW_user');
    }
}
//reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.is_login = true;
            draft.user = {...action.payload.user_data};
        }),
        [DEL_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.is_login = false;
            draft.user = {};
        }),
    },
    initialState
);


//action creator export
const actionCreators = {
    signup,
    login,
    check,
    logout,

};

export { actionCreators };
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie,setCookie,deleteCookie } from "../../shared/Cookie";

//API
import instance from "../../shared/Request";
import { set } from "lodash";

//action
const SET_USER = "SET_USER";
const DEL_USER = "DEL_USER";
const SET_NOTICE = "SET_NOTICE";
const SUB = "SUB";
const NOTICE = "NOTICE";
const NOTICE_CHECK = "NOTICE_CHECK";

//action creatos
const set_user = createAction(SET_USER, (user_data) => ({ user_data }));
const del_user = createAction(DEL_USER, () => ({  }));
const setNotice = createAction(SET_NOTICE, (noticeList) => ({ noticeList }));
const sub = createAction(SUB, (noti) => ({noti}));
const AlrtNotice = createAction(NOTICE, () => ({}));
const AlrtNoticeCheck = createAction(NOTICE_CHECK, () => ({}));


//initialState
const initialState = {
    is_login : false,
    user : {},
    sub : false,
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
const nickCheck=(nickName) =>{
    return async function (dispatch,getState){
        instance({
            method : "post",
            url : "/user/signup/checkNick",
            data : {nickName},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            console.log(res);
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
const check=() =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user')
        if(token !== undefined){
            instance({
                method : "post",
                url : "/user/myInfo",
                data : {},
                headers : {
                    "Content-Type": "application/json;charset-UTF-8",
                    "authorization" : token
                }
            }).then(res=>{
                dispatch(set_user(res.data));
            });
        }
    }
}
const logout=() =>{
    return async function (dispatch,getState){
        deleteCookie('WW_user');
        dispatch(del_user());
    }
}
const editData=(userData) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');

        instance({
            method : "put",
            url : "/user/update",
            data : userData,
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            console.log(res);
        });
    }
}
const notice=(noti) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');

        instance({
            method : "get",
            url : "/api/alarm?page=0&size=20",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            dispatch(setNotice(res.data));
        });
    }
}

const subNoti=(noti) =>{
    return async function (dispatch,getState){
        dispatch(sub(noti));
    }
}

const Alrt=() =>{
    return async function (dispatch,getState){
        dispatch(AlrtNotice());
    }
}
const AlrtCheck=() =>{
    return async function (dispatch,getState){
        dispatch(AlrtNoticeCheck());
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
            window.location.assign('/')
        }),
        [SET_NOTICE]: (state, action) =>
        produce(state, (draft) => {
            draft.noticeList = [...action.payload.noticeList];
        }),
        [SUB]: (state, action) =>
        produce(state, (draft) => {
            draft.sub = action.payload.noti;
        }),
        [NOTICE]: (state, action) =>
        produce(state, (draft) => {
            draft.user.alaramRead = false;
        }),
        [NOTICE_CHECK]: (state, action) =>
        produce(state, (draft) => {
            draft.user.alaramRead = true;
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
    editData,
    nickCheck,
    subNoti,
    notice,
    Alrt,
    AlrtCheck,
};

export { actionCreators };

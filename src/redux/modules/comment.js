// Redux handleAction 관리하는 곳.
// Ducks구조에서 Reducer 파일안에 액션타입과 액션 생성자 함수를 함께 넣어서 관리하는데 이를 모듈(module)이라고 함.


import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import instance from "../../shared/Request";

// Cookie
import { getCookie } from "../../shared/Cookie";



//action
const ADD_COMMENT = "ADD_COMMENT";

//action creators
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));

//initialState
const initialState = {
  
};


const addComment = (comment) => {
    return async function (dispatch){
        const token = getCookie('WW_user');

        instance({
            method : "post",
            url : "/comment",
            data : comment,
            headers : {
                "Content-Type": "multipart/form-data",
                'authorization' : token,
            }
        }).then(res=>{
            dispatch(setComment(res.data));
        });
        
    };
    };


// handleActions 설정.(Get, Add, Delete)
export default handleActions ({
   
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment);
        }),
        
    },
    initialState
)
const actionCreators = { //액션 생성자 내보내기
    addComment,
};

export {actionCreators};
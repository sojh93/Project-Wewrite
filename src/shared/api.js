import axios from "axios";
import { getCookie } from "./Cookie";


const apis = axios.create({
    baseURL: "http://13.209.70.1/", //*요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록*/
});



apis.interceptors.request.use(function (config) {
    const token = getCookie("token");
    config.headers["Content-Type"] = "application/json;charset=UTF-8; charset=UTF-8";
    config.headers.common["authorization"] = `${token}`;
    return config;
});


export const userApis = {
    //로그인요청
    login: (username, password) =>
        apis.post("/login", {username:username, password:password})
    ,
    // 회원가입 요청
    signup: (username, nickname, password,passwordcheck) =>
        apis.post("/signup", {
            username:username,
            nickname:nickname, 
            password:password,
            passwordcheck:passwordcheck,
        })
    ,
    //유저정보 백단에서 가져오기
    getUser: () => apis.get("/user/loginInfo"),

    logout: () => 
        apis.post("/user/logout")
    ,
  
}


export const commentApis = {
    //댓글 가져오기
    getComment: (post_id) => apis.get(`/comment/${post_id}`),
    //댓글 추가하기
    addComment: (post_id,comment) => apis.post(`/comment/${post_id}`,{
        comment:comment
    }),
    //댓글 삭제하기
    deleteComment: (commentKey) => apis.delete(`/comment/${commentKey}`),

}

export const searchApis = {
    //검색결과 가져오기
    getSearch: (findword) => apis.get(`/search/${findword}`),


}
//import Library
import React from "react"
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//import CSS
import './App.css';
import theme from '../theme/theme';

//import Pages
import Main from "../pages/Main";
import Login from "../pages/Login";
import Clause from "../pages/Clause";
import Signup from "../pages/Signup";
import UserPage from "../pages/UserPage";
import Mywrite from "../pages/Mywrite";
import NewsList from "../pages/NewsList";
import PostList from "../pages/PostList";
import Write from '../pages/Write';
import UnfinishedDetail from '../pages/UnfinishedDetail';
import PostDetail from '../pages/PostDetail';
import KakaoLogin from '../pages/KakaoLogin';
import ModifyProfile from "../pages/ModifyProfile";
import ChangePassword from "../pages/ChangePassword";
import WithdrawMember from "../pages/withdrawMember";
import Socket from '../components/Socket'



function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/kakaoLogin" element={<KakaoLogin />} />
          <Route path="/clause" element={<Clause />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/userpage/:userKey" element={<UserPage />} />
          <Route path="/mywrite" element={<Mywrite />} />
          <Route path="/newslist" element={<NewsList />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/write" element={<Write />} />
          <Route path="/unfinisheddetail/:postKey" element={<UnfinishedDetail />} />
          <Route path="/postDetail/:postKey" element={<PostDetail />} />
          <Route path="/modifyprofile" element={<ModifyProfile />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/withdrawMember" element={<WithdrawMember />} />
          <Route path="/socket" element={<Socket />} />

        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

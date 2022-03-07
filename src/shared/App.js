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
import Mypage from "../pages/Mypage";
import Mywrite from "../pages/Mywrite";
import NewsList from "../pages/NewsList";
import PostList from "../pages/PostList";
import Write from '../pages/Write';
import UnfinishedDetail from '../pages/unfinishedDetail';
import FinishedDetail from '../pages/FinishedDetail';
import KakaoLogin from '../pages/KakaoLogin';



function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/login/kakaoLogin" element={<KakaoLogin />}/>
          <Route path="/clause" element={<Clause />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/mywrite" element={<Mywrite />}/>
          <Route path="/newslist" element={<NewsList />}/>
          <Route path="/postlist" element={<PostList />}/>
          <Route path="/write" element={<Write />}/>
          <Route path="/unfinisheddetail" element={<UnfinishedDetail />}/>
          <Route path="/finisheddetail/:postKey" element={<FinishedDetail />}/>

        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

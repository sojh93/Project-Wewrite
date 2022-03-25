//import Library
import React from "react"
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactGA from 'react-ga';

//import CSS
import './App.css';
import theme from '../theme/theme';

//import Pages
import Main from "../pages/Main";
import Login from "../pages/Login";
import Clause from "../pages/Clause";
import Signup from "../pages/Signup";
import UserPage from "../pages/UserPage";
import NewsList from "../pages/NewsList";
import PostList from "../pages/PostList";
import Write from '../pages/Write';
import PostDetail from '../pages/PostDetail';
import KakaoLogin from '../pages/KakaoLogin';
import ModifyProfile from "../pages/ModifyProfile";
import ChangePassword from "../pages/ChangePassword";
import WithdrawMember from "../pages/withdrawMember";
import Socket from '../components/Socket'
import ThemePage from "../pages/ThemePage";
import Notice from "../pages/Notice";

ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});
ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});

function App() {
  let location = useLocation();
  React.useEffect(()=>{
    ReactGA.initialize("UA-223927553-2");
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  },[])
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
          <Route path="/newslist" element={<NewsList />} />
          <Route path="/postlist/:listType" element={<PostList />} />
          <Route path="/themepage/:theme" element={<ThemePage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/postDetail/:postKey" element={<PostDetail />} />
          <Route path="/modifyprofile" element={<ModifyProfile />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/withdrawMember" element={<WithdrawMember />} />
          <Route path="/socket" element={<Socket />} />
          <Route path="/notice" element={<Notice />} />

        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

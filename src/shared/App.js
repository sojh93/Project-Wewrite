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
import LegiMem from "../pages/LegiMem";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/clause" element={<Clause />}/>
          <Route path="/legimem" element={<LegiMem />}/>
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

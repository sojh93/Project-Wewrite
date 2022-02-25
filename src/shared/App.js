//import Library
import React from "react"
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";


//import CSS
import './App.css';
import theme from './theme';

//import Pages
import Main from "../pages/Main";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

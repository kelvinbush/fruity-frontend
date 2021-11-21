import React from "react";
import Home from "./Home/Home";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/admin"} element={<Home />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;

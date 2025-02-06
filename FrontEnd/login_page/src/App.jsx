import React from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from "./pages/Navebar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Login from "./components/Login";
function App() {
    return (
        <BrowserRouter>
            <Navebar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
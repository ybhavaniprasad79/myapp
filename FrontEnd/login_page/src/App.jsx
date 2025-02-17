import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/LoginPage";
import Navbar from "./pages/Navebar";
import Login from "./components/Login";
import Signup from "./components/signup";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Loginpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
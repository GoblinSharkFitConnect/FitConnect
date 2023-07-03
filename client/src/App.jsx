import React from "react";
import Login from "./components/Login.jsx";
import Homepage from "./components/Homepage.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;

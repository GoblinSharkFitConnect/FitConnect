import React from "react";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Homepage from "./components/Homepage.jsx";
import Signup from "./components/Signup.jsx";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
};

export default App;
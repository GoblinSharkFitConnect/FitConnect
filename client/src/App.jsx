import React from "react";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" element={<p>hello</p>} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Switch>
        </div>
    );
};

export default App;
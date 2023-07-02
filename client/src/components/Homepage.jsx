import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        console.log('click login')
        navigate('/login')
    }

    const navigateToSignup = () => {
        navigate('/signup')
    }

    return (
        <div>
          <button onClick={navigateToLogin}>Login</button>
          <button onClick={navigateToSignup}>Signup</button>
            {/* 
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                </Routes> */}

        </div>
    );
};

export default Homepage;
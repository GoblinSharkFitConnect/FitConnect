import React from "react";
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then((res) => {
                if (res.ok) {
                    navigate('/dashboard');
                }
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Username"></input>
                <input name="password" type="password" placeholder="Password"></input>
                <input type='submit' value="Log In"></input>
            </form>
        </div>
    )
};

export default Login;
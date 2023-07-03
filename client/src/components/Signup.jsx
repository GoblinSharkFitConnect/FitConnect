import React from "react";
import { useNavigate } from "react-router";

const Signup = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            username: e.target.username.value,
            password: e.target.password.value
        };
        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then((res) => {
                if (res.ok) {
                    navigate('/login');
                }
            });
    };

    return (
        <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input name="firstName" type="text" placeholder="First Name"></input>
                <input name="lastName" type="text" placeholder="Last Name"></input>
                <input name="username" type="text" placeholder="username"></input>
                <input name="password" type="password" placeholder="password"></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </>
    )
};

export default Signup;
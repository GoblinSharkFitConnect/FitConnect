import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = { firstname, lastname, username, password };
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
                <input onChange={e => setFirstname(e.target.value)} value={firstname} name="firstName" type="text" placeholder="First Name"></input>
                <input onChange={e => setLastname(e.target.value)} value={lastname} name="lastName" type="text" placeholder="Last Name"></input>
                <input onChange={e => setUsername(e.target.value)} value={username} name="username" type="text" placeholder="username"></input>
                <input onChange={e => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="password"></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </>
    )
};

export default Signup;
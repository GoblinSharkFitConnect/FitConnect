import React, {useState} from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { username, password };
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res.ok) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setUsername(e.target.value)} name="username" type="text" placeholder="Username"></input>
        <input onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="Password"></input>
        <input type="submit" value="Log In"></input>
      </form>
    </>
  );
};

export default Login;
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const history = useHistory()

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handlePasswordConfirm(e) {
    e.preventDefault();
    setPasswordConfirm(e.target.value);
  }

  function handleLogin() {
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirm,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d)
        setPassword("")
      setUsername("")
      setPasswordConfirm("")
      history.push("/home")
      })
  }

  return (
    <div>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={handleUsername}
      />
      <br />
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
      />
      <br />
      <input
        type="password"
        id="passwordConfirm"
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChange={handlePasswordConfirm}
      />
      <br />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <br/>
      <Link to="/signup">{"Signup"}</Link>
    </div>
  );
}

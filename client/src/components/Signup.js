import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "./App";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState([]);

  const { setUser } = useContext(UserContext);

  const history = useHistory();

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
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirm,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          history.push("/home");
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }

  return (
    <div className="input" style={{ marginTop: "10%" }}>
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
        Signup
      </button>
      <br />
      <Link to="/login">{"Login"}</Link>
      {errors.map((err) => (
        <h4 key={err}>{err}</h4>
      ))}
    </div>
  );
}

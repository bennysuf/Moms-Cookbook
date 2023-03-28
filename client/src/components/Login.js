import React, {useState} from "react";

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    
    function handleUsername(e){
        e.preventDefault()
        setUsername(e.target.value)
    }

    function handlePassword(e){
        e.preventDefault()
        setPassword(e.target.value)
    }

    function handlePasswordConfirm(e){
        e.preventDefault()
        setPasswordConfirm(e.target.value)
    }

    function handleLogin() {
        
        fetch("/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    password_confirmation: passwordConfirm
                })
        })
        .then(r => r.json())
        .then(d => console.log(d))
    }

    
    return (
        <div>
            <input type="text" id="username" placeholder="Username" value={username} onChange={handleUsername}/>
            <br/>
            <input type="password" id="password" placeholder="Password" value={password} onChange={handlePassword}/>
            <br/>
            <input type="password" id="passwordConfirm" placeholder="Confirm Password" value={passwordConfirm} onChange={handlePasswordConfirm}/>
            <br/>
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    );
}
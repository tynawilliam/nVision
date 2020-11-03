import React, { useEffect, useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(password)

        async function loginUser() {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const resData = await res.json();
            if (!res.ok) {
                console.log("Error")
            } else {
                console.log("Success")
            }
        }
        loginUser();
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={getEmail} />
                <input type="password" placeholder="Password" value={password} onChange={getPassword} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login

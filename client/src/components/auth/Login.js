import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import '../../styles/login.css'

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {fetchWithCSRF, setCurrentUserId} = useContext(AuthContext)

    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        async function loginUser() {
            const res = await fetchWithCSRF('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const resData = await res.json();
            if (!res.ok) {
                console.log("Error")
            } else {
                setCurrentUserId(resData.current_user_id)
            }
        }
        loginUser();
    }

    return (
        <div style={{
            marginTop: "150px"
        }} className='loginDiv'>
            {document.body.classList.add("loginBody")}
            <form style={{
                border: "1px solid black",
                width: "340px",
                height: "400px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0,0,0,0.85)",
                position: "relative"
            }} onSubmit={onSubmit} className='loginForm'>
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='Not Found' className='logo'/>
                <h2 style={{
                    marginTop: "115px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "20px"
                }}>Log in to Your Account</h2>
                <div id='loginForm_email'>
                    <input className='fields' type="email" placeholder="Email" value={email} onChange={getEmail} />
                </div>
                <div  id='loginForm_password'>
                    <input className='fields' type="password" placeholder="Password" value={password} onChange={getPassword} />
                </div>
                <div style={{display: "flex", flexDirection: "row", color: "white", justifyContent: "space-evenly"}}>
                    <div className='formText'><a>Keep me logged in</a></div><div className='formText'>Forgot Password?</div>

                </div>
                <div id='loginForm_submit'>
                    <input style={{
                        height: "25px",
                        width: "220px",
                        border: "0",
                        backgroundColor: "#FF914D",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        fontSize: "17px"
                    }} className="login_submit" type="submit" value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default Login

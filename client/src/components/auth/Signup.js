import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import '../../styles/login.css'

function Signup(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);

    const onSubmit = e => {
        e.preventDefault();

        async function signUpUser() {
            const res = await fetchWithCSRF('/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    username,
                    password,
                    password2: confirmPassword
                })
            });

            const resData = await res.json();
            if (!res.ok) {
                setErrors(resData.errors);
            }else{
                setCurrentUserId(resData.current_user_id)
            }
        }
        signUpUser()
    }
    return (
        <div style={{
            marginTop: "150px"
        }} className='loginDiv'>
            {document.body.classList.add("loginBody")}
            <form onSubmit={onSubmit} style={{
                border: "1px solid black",
                width: "340px",
                height: "550px",
                margin: "0 auto",
                marginTop: "-60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0,0,0,0.85)",
                position: "relative"
            }} className='signUpForm'>
                {errors.length ? errors.map(err => <li key={err} >{err}</li>) : ''}
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='Not Found' className='logo'/>
                <h2 style={{
                    marginTop: "115px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "20px"
                }}>Sign Up</h2>
                <div>
                    <input className='fields' type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <input className='fields' type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div>
                    <input className='fields' type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div id='signUp_email'>
                    <input className='fields' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div  id='signUp_password'>
                    <input className='fields' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <input className='fields' type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <div id='signUp_submit'>
                    <input style={{
                        height: "25px",
                        width: "250px",
                        border: "0",
                        backgroundColor: "#FF914D",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        fontSize: "17px"
                    }} className="login_submit" type="submit" value="Sign up"/>
                </div>
            </form>
        </div>
    )
}

export default Signup

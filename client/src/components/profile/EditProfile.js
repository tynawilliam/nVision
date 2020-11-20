import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import '../../styles/profile.css'
import Navbar from '../nav/Navbar'

function EditProfile() {
    const {currentUser} = useContext(AuthContext)
    const [username, setUsername] = useState(currentUser.username)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')

    const editName = e => {
        setUsername(e.target.value)
    }
    const editEmail = e => {
        setEmail(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }
    const getConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }
    const verifyPwd = e => {
        setVerifyPassword(e.target.value)
    }

    const handleEdit = async (e) => {
        // e.preventDefault()
        const data = {
            username: username,
            email: email
        }
        try {
            const res = await fetch(`/api/users/${currentUser.id}`, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } catch (e) {
            console.error(e)
        }
    }

    const changePassword = async (e) => {
        // e.preventDefault()
        // const data = {
        //     password: password,
        //     confirmPassword: confirmPassword
        // }
        // try {
        //     const res = await fetch(`/api/users/${currentUser.id}`, {
        //         method: "PUT",
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        // } catch (e) {
        //     console.error(e)
        // }
        console.log('saved')
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                paddingTop: "0"
            }}>
                <Navbar />
            </div>
            <div className='editProfile' style={{
                margin: "0 auto",
                width: "600px",
                padding: "20px",
                // backgroundColor: "grey",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {document.body.classList.add("editBody")}
                <h2 style={{marginBottom: "30px"}}>Hi {currentUser.username}</h2>
                <h3>Update Your Profile</h3>
                <form className='editProfile-form'>
                    <div>
                        <input name='username' type='text' placeholder={currentUser.username} onChange={editName}/>
                    </div>
                    <div>
                        <input name='email' type='email' placeholder={currentUser.email} />
                    </div>
                    <div id='submit'>
                        <input type='submit' onClick={handleEdit}/>
                    </div>

                </form>
                <form className='editProfile-form'>
                    <div>
                        <input name='verifyPassword' type='password' placeholder='current password' />
                    </div>
                    <div>
                        <input name='password' type='password' placeholder='new password' />
                    </div>
                    <div>
                        <input name='confirmPassword' type='password' placeholder='confirm password' />
                    </div>
                    <div id='password'>
                        <input type='submit' onClick={changePassword}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile

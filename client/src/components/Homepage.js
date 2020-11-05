import React from 'react';
import '../styles/home.css'
import Logout from './auth/Logout';


function Homepage() {
    return (
        <div>
            {document.body.classList.add("homeBody")}
            <h1>Home</h1>
            <Logout />
        </div>
    )
}

export default Homepage

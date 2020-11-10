import React from 'react';
import '../../styles/home.css'
import Logout from '../auth/Logout';
import Navbar from '../nav/Navbar';
import SearchBar from '../search/SearchBar';


function Homepage(props) {
    return (
        <div>
            {document.body.classList.add("homeBody")}
            <Navbar/>
            <SearchBar />
        </div>
    )
}

export default Homepage

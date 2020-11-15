import React from 'react';
import '../../styles/home.css'
import Logout from '../auth/Logout';
import Navbar from '../nav/Navbar';
import SearchBar from '../search/SearchBar';
import BoardList from './BoardList';


function Homepage(props) {
    return (
        <div>
            {document.body.classList.add("homeBody")}
            <Navbar/>
            <SearchBar />
            <BoardList />
        </div>
    )
}

export default Homepage

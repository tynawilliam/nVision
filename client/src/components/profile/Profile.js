import React, { useContext } from 'react'
import Navbar from '../nav/Navbar';
import AuhtContext from '../../context/AuthContext'
import '../../styles/profile.css'
import UserBoards from './UserBoards';
import FeaturedBoards from './FeaturedBoards';
import SavedBoards from './SavedBoards';

// import

function Profile() {
    const {currentUser} = useContext(AuhtContext)
    return (
        <div>
            <Navbar />
            <div className='greeting'>
                <h2>Hello {currentUser.username}</h2>
                <h3>Here are our recommendations for you</h3>
                <FeaturedBoards />
                <h2>Your Boards</h2>
                <UserBoards />
                <h2>Saved Boards</h2>
                <SavedBoards />
            </div>
        </div>
    )
}

export default Profile

import React, { useContext } from 'react'
import Navbar from '../nav/Navbar';
import AuhtContext from '../../context/AuthContext'
import '../../styles/profile.css'
import FeaturedCarousel from './FeaturedCarousel';
import UserBoards from './UserBoards';

// import

function Profile() {
    const {currentUser} = useContext(AuhtContext)
    return (
        <div>
            <Navbar />
            <div className='greeting'>
                <h2>Hello {currentUser.username}</h2>
                <h3>Here are our recommendations for you</h3>
                <FeaturedCarousel />
                <h2>Your Boards</h2>
                <UserBoards />
            </div>
        </div>
    )
}

export default Profile

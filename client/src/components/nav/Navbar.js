import React, {useContext} from 'react'
import Logout from '../auth/Logout'
import '../../styles/navbar.css'
import AuthContext from '../../context/AuthContext'

function Navbar() {
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser.username)
    return (
        <div className="navBar">
            {document.body.classList.add('navBar-body')}
            <div className='leftNav'>
                <button><a href='/'>Home</a></button>
                <button><a href='/'>New Board</a></button>
            </div>
            <div className='rightNav'>
                <span>{currentUser.username}</span>
                <Logout />
            </div>
        </div>
    )
}

export default Navbar
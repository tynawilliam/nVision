import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';


function Logout(props) {
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);

    const logOut = e => {
        e.preventDefault();

        (async() => {
            const res = await fetchWithCSRF('/logout', {
                method: 'POST',
                credentials: 'include'
            });
            if (res.ok) setCurrentUserId(null)
        })()
    }
    return (
        <div className='logoutDiv'>
            <form onSubmit={logOut}>
                <button type="submit" className="logoutButton" style={{
                    width: "200px"
                }}>Logout</button>
            </form>
        </div>
    )
}

export default Logout

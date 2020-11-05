import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import AuthContext from '../src/context/AuthContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup'
import Homepage from './components/Homepage';
import '../src/index.css'

import UserList from './components/UsersList';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AuthRoute from './components/auth/AuthRoute';
import Canvas from './pages/Canvas';


function App() {
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId,
        currentUser,
        setCurrentUser
    };

    useEffect(() => {
        (async () => {
            const res = await fetch('/restore')
            const data = await res.json()
            const { current_user_id, current_user} = data
            setCurrentUserId(current_user_id)
            setCurrentUser(currentUser)
        })()
    }, [])


  return (
    <AuthContext.Provider value={authContextValue}>
        <BrowserRouter>
            {/* <nav>
                <ul>
                    <li><NavLink to='/canvas'>New Canvas</NavLink></li>
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
            </nav> */}
            <Switch>
                {/* <Route path="/users">
                    <UserList currentUserId={currentUserId}/>
                </Route> */}
                <AuthRoute exact path='/signup' component={Signup}/>
                <AuthRoute exact path='/login' component={Login}/>
                <ProtectedRoute exact path="/" component={Homepage} currentUserId={currentUserId} />
                <Route exact path='/canvas' component={Canvas}></Route>
            </Switch>
        </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

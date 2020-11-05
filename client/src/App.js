import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import AuthContext from '../src/context/AuthContext';
import Login from './components/auth/Login';
import Homepage from './components/Homepage';
import '../src/index.css'

import UserList from './components/UsersList';


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
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                </ul>
            </nav> */}
            <Switch>
                <Route path="/users">
                    <UserList currentUserId={currentUserId}/>
                </Route>

                <Route exact path="/" render={Homepage}>
                    {/* <h1>User: {currentUserId}</h1> */}
                </Route>

                <Route path="/login">
                    {currentUserId ? <Redirect to="/" /> : <Login />}
                </Route>
            </Switch>
        </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

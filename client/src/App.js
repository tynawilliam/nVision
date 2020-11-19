import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import AuthContext from '../src/context/AuthContext';
import PhotoContext from '../src/context/PhotoContext';
import OptionsContext from '../src/context/OptionsContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup'
import Homepage from './components/feed/Homepage';
import '../src/index.css'

import UserList from './components/UsersList';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AuthRoute from './components/auth/AuthRoute';
import Canvas from './pages/Canvas';

import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import VBoard from './components/canvas/konva/VBoard';
import Profile from './components/profile/Profile';
import FeaturedBoards from './components/profile/FeaturedBoards';
import BoardContext from './context/BoardContext';
import ImageSearch from './components/canvas/konva/ImageSearch';


function App() {
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [userPosts, setUserPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1593692439810-bf99f1df4e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1558535284-39fe3f893047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1532713031318-db2d14e4b3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1466036692599-070d032f4711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1515982200576-f29f11444503?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        }
    ])
    const [currentPhoto, setCurrentPhoto] = useState(null)
    const [currentOption, setCurrentOption] = useState('shapes')
    const [boardName, setBoardName] = useState('')
    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId,
        currentUser,
        setCurrentUser,
    };

    const photoContextValue = {
        currentPhoto,
        setCurrentPhoto,
        photos
    }

    const optionsContextValue = [
        currentOption,
        setCurrentOption
    ]

    const boardContextValue = [
        boardName,
        setBoardName
    ]

    useEffect(() => {
        (async () => {
            const res = await fetch('/restore')
            const data = await res.json()
            const { current_user_id, current_user} = data
            setCurrentUserId(current_user_id)
            setCurrentUser(current_user)
            setLoading(false)
        })()
    }, [])


  return (
    <AuthContext.Provider value={authContextValue}>
        {loading && <h1>Loading</h1>}
        {!loading &&
        <OptionsContext.Provider value={optionsContextValue}>
            <PhotoContext.Provider value={photoContextValue}>
                <BoardContext.Provider value={boardContextValue}>
                    <BrowserRouter>
                        <DndProvider backend={HTML5Backend}>
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
                                <ProtectedRoute exact path="/" component={Homepage} />
                                <ProtectedRoute exact path='/profile' component={Profile} />
                                <Route exact path='/canvas'>
                                    <Canvas />
                                </Route>

                            </Switch>
                        </DndProvider>
                    </BrowserRouter>
                </BoardContext.Provider>
            </PhotoContext.Provider>
        </OptionsContext.Provider>
    }
    </AuthContext.Provider>
  );
}

export default App;

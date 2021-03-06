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
import SearchContext from './context/SearchContext'
import SavedContext from './context/SavedContext'
import EditProfile from './components/profile/EditProfile';
import upload from './components/canvas/upload';

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
    const [currentOption, setCurrentOption] = useState('images')
    const [boardName, setBoardName] = useState('')
    const [feedSearch, setFeedSearch] = useState('')
    const [savedBoards, setSavedBoards] = useState([
        [
            {
                id: 99,
                board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg",
                name: "Demo"
            }
        ]
    ])
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

    const searchContextValue = [
        feedSearch,
        setFeedSearch
    ]

    const savedContextValue = [
        savedBoards,
        setSavedBoards
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
                    <SearchContext.Provider value={searchContextValue}>
                        <SavedContext.Provider value={savedContextValue}>
                            <BrowserRouter>
                                <DndProvider backend={HTML5Backend}>

                                    <Switch>
                                        <AuthRoute exact path='/signup' component={Signup}/>
                                        <AuthRoute exact path='/login' component={Login}/>
                                        <ProtectedRoute exact path="/" component={Homepage} />
                                        <ProtectedRoute exact path='/profile' component={Profile} />
                                        <ProtectedRoute exact path='/canvas' component={Canvas}/>
                                        <ProtectedRoute exact path='/edit' component={EditProfile} />
                                        <Route path='/upload' component={upload} />

                                    </Switch>
                                </DndProvider>
                            </BrowserRouter>
                        </SavedContext.Provider>
                    </SearchContext.Provider>
                </BoardContext.Provider>
            </PhotoContext.Provider>
        </OptionsContext.Provider>
    }
    </AuthContext.Provider>
  );
}

export default App;

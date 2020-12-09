import React, {useContext, useState, useEffect} from 'react';
import '../../styles/feed.css'
import { faHeart, faBookmark, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import AuthContext from '../../context/AuthContext'
import SearchContext from '../../context/SearchContext';
import SavedContext from '../../context/SavedContext';
import fetch from 'node-fetch';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
        width: '610px',
        height: '600px',
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center"
    }
  };

function BoardList() {
    const save = <FontAwesomeIcon icon={faBookmark} />
    const like = <FontAwesomeIcon icon={faHeart} />
    const noLike = <FontAwesomeIcon icon={faHeartBroken} />
    const {currentUserId} = useContext(AuthContext)
    const [isModal, setIsModal] = useState(false)
    const [show, setShow] = useState(false)
    const [activeBoard, setActiveBoard] = useState({})
    const [savedBoards, setSavedBoards]= useContext(SavedContext)
    const [feedSearch, setFeedSearch] = useContext(SearchContext)

    const [boards, setBoards] = useState([
        {
            name: "Test",
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg"
        }
    ])
    const searchBds = boards.filter(board => (
        board.name.toLowerCase().startsWith(feedSearch.toLowerCase())
    ))

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/boards/${currentUserId}/friends`)
            try {
                if (res.ok) {
                    const data = await res.json()
                    const friendsBoards = data.friends_boards
                    // console.log(data)
                    const boardList = []
                    friendsBoards.forEach(boardLst => {
                        for (const board in boardLst) {
                            boardList.push(boardLst[board])
                        }
                    });
                    setBoards(boardList)

                }
            }catch(err) {
                console.error(err)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/boards/${currentUserId}/saved`)
            try {
                if (res.ok) {
                    const data = await res.json()
                    setSavedBoards(data.saved_boards)

                }
            }catch(err) {
                console.error(err)
            }
        })()
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        // // console.log(ids)
        // ids.push(activeBoard.id)


        const ids = savedBoards.map(board => board[0].id)
        console.log(ids)

        if (!ids.includes(activeBoard.id)){
            const data = {
                saved: activeBoard.id.toString()
            }
            // console.log(data)
            try {
                const res = await fetch(`/api/users/${currentUserId}`, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            } catch (e) {
                console.error(e)
            }
        } else{
            const data = {
                unsaved: activeBoard.id.toString()
            }
            try {
                const res = await fetch(`/api/users/${currentUserId}`, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            } catch (e) {
                console.error(e)
            }
        }
    }



    const handleClick = e => {
        e.preventDefault()
        const getId = e.nativeEvent.path[1].id
        const getBoard = boards.filter(board => {
            return board.id === parseInt(getId)
        })
        setActiveBoard(getBoard[0])
        setShow(true)
    }

    // const handleSave = e => {
    //     e.preventDefault()
    //     console.log(activeBoard)
    //     // setSavedBoards(savedBoards.push(activeBoard))
    //     console.log(savedBoards)

    // }
    // useEffect(() => console.log(feedSearch), [])
    const handleClose = () => setShow(false)

    return (
        <div className='feed'>
            {feedSearch === '' ?
                boards.map((board, idx) => (
                    <div className='feedBoard' key={idx} id={board.id} onClick={handleClick}>
                        <img src={board.board_url} />
                        <div className='feedBoard_info'>
                            <h3>{board.name}</h3>
                            <span style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>{board.username}
                            </span>
                        </div>
                    </div>
                ))
            :
                searchBds.map((board, idx) => (
                    <div className='feedBoard' key={idx} id={board.id} onClick={handleClick}>
                        <img src={board.board_url} />
                        <div className='feedBoard_info'>
                            <h3>{board.name}</h3>
                            <span style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>{board.username}
                            </span>
                        </div>
                    </div>
                ))
            }
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <div className='save'>
                    <img style={{
                        width: "600px",
                        height: "500px"
                    }} src={activeBoard.board_url} />
                    <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                        <h3>{activeBoard.name}</h3>
                        <h4>Created By: {activeBoard.username}</h4>
                        <span>
                                <button type='submit' id={activeBoard.id} onClick={handleSave} className='saveBtn'>{save}</button>
                        </span>
                    </div>
                </div>

            </Modal>

        </div>
    )


}

export default BoardList

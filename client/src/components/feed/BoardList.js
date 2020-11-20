import React, {useContext, useState, useEffect} from 'react';
import '../../styles/feed.css'
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons'
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
    const {currentUserId} = useContext(AuthContext)
    const [isModal, setIsModal] = useState(false)
    const [show, setShow] = useState(false)
    const [activeBoard, setActiveBoard] = useState({})
    const [savedBoards, setSavedBoards]= useContext(SavedContext)
    // const [likes, setLikes] = useState(null)

    const [boards, setBoards] = useState([
        {
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg"
        }
    ])

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

    const handleSave = async (e) => {
        e.preventDefault()
        const ids = savedBoards.map(board => board[0].id)
        console.log(ids)
        ids.push(activeBoard.id)
        console.log(ids)
        const data = {
            saved: activeBoard.id.toString()
        }
        console.log(data)
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
            {boards.map((board, idx) => (
                <div className='feedBoard' key={idx} id={board.id} onClick={handleClick}>
                    <img src={board.board_url} />
                    <div className='feedBoard_info'>
                        <h3>{board.name}</h3>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>{board.user_id}
                        </span>
                    </div>
                </div>
            ))}
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <div>
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
                        <span>{activeBoard.username}
                                <button type='submit' id={activeBoard.id} onClick={handleSave} className='saveBtn'>{save}</button>
                        </span>
                    </div>
                </div>

            </Modal>

        </div>
    )


}

export default BoardList

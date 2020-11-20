import React, {useContext, useState, useEffect} from 'react';
import '../../styles/feed.css'
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import AuthContext from '../../context/AuthContext'

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
    const [likes, setLikes] = useState(null)

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

    const handleClick = e => {
        e.preventDefault()
        const getId = e.nativeEvent.path[1].id
        const getBoard = boards.filter(board => {
            return board.id === parseInt(getId)
        })
        setActiveBoard(getBoard[0])
        console.log(activeBoard)
        setShow(true)
    }

    const changeColor = e => {
        e.preventDefault()

    }
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
                                <button style={{
                                    fontSize: "20px",
                                    paddingRight: "10px",
                                    background: "none"
                                }} type='submit' id={activeBoard.id} onClick={changeColor}>{save}</button>
                        </span>
                    </div>
                </div>

            </Modal>

        </div>
    )


}

export default BoardList

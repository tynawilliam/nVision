import React, {useContext, useState, useEffect} from 'react';
import '../../styles/feed.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
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
        width: '700px',
        height: '700px',
        borderRadius: "30px"
    }
  };

function BoardList() {
    const like = <FontAwesomeIcon icon={faHeart} />
    const {currentUserId} = useContext(AuthContext)
    const [isModal, setIsModal] = useState(false)
    const [show, setShow] = useState(false)
    const [activeBoard, setActiveBoard] = useState({})

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
                    setBoards(data.friends_boards[0])

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
        // console.log(e.nativeEvent.path[1].id)
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
                            <span>
                                {board.likes}
                                <button>{like}</button>
                            </span>
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
                    <div>
                        <h3>{activeBoard.name}</h3>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>{activeBoard.username}
                            <span>
                                {activeBoard.likes}
                                <button type='submit' id={activeBoard.id} onClick={changeColor}>{like}</button>
                            </span>
                        </span>
                    </div>
                </div>

            </Modal>

        </div>
    )


}

export default BoardList

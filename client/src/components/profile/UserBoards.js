import React, { useContext, useEffect, useState } from 'react';
import Board from '../canvas/Board';
import AuthContext from '../../context/AuthContext'
import '../../styles/home.css'

function UserBoards() {
    const {currentUser} = useContext(AuthContext)
    const [boards, setBoards] = useState([
        {
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg"
        }
    ])
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/users/${currentUser.id}/boards`)
            try {
                if (res.ok) {
                    const data = await res.json()
                    setBoards(data.boards)

                }
            }catch(err) {
                console.error(err)
            }
        })()
    }, [])

        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "90vw",
                margin: "0 auto",
                flexWrap: "wrap",
                backgroundColor: "#fffff4",
                alignItems: "center",
                justifyContent: "left"
            }}>
                {boards.map((board, idx) => (
                    <div className='userBoard' key={idx}>
                        <img alt="Not Found" src={board.board_url} style={{
                            width: "300px",
                            height: "300px",
                            padding: "20px"
                        }}/>
                    </div>
                ))}
            </div>
        )

}

export default UserBoards

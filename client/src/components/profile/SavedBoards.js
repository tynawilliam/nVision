import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext'
import SavedContext from '../../context/SavedContext';

function SavedBoards() {
    const {currentUser} = useContext(AuthContext)
    const [savedBoards, setSavedBoards] = useContext(SavedContext)
    // console.log(savedBoards)

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/boards/${currentUser.id}/saved`)
            try {
                if (res.ok) {
                    const data = await res.json()
                    console.log(data.saved_boards)
                    setSavedBoards(data.saved_boards)

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
            {savedBoards.map((board, idx) => (
                <div key={idx}>
                    <img alt="Not Found" src={board[0].board_url} style={{
                        width: "300px",
                        height: "300px",
                        padding: "20px"
                    }}/>
                </div>
            ))}
        </div>
    )
}

export default SavedBoards

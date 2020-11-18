import React from 'react';
import Board from '../canvas/Board';
import { featuredList } from './FeaturedList';

function UserBoards() {
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
            {featuredList.map((board) => (
                <div>
                    <img src={board.board_url} style={{
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

import React from 'react';


function Card({ pic, boardName, boardId, handleClick }) {

    return (
        <div onClick={handleClick} id={boardId} className="card">
            <img id={boardId} src={pic} alt="Not Found"/>
            <div id={boardId} className="FeaturedName">{boardName}</div>
        </div>
    )
}

export default Card

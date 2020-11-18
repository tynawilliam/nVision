import React from 'react';

const Card = ({ pic, boardName }) => (
    <div className="card">
        <img src={pic} alt="Not Found"/>
        <div className="FeaturedName">{boardName}</div>
    </div>
)

export default Card;

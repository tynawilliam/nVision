import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser }from '@fortawesome/free-solid-svg-icons';
import '../../styles/canvas.css'


function CanvasNav() {
    const user = <FontAwesomeIcon icon={faUser}/>
    return (
        <div className='canvasNav'>
            {document.body.classList.add("canvasNav-body")}
            <div className='leftNav'>
                <a style={{
                    backgroundImage: "linear-gradient(45deg, red, goldenRod)",
                    backgroundSize: "100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }} className='styled_btn' id='canvasNav_home' href="/">Home</a>
                <a className='styled_btn' id='canvasNav_feed' href='#'>Feed</a>
            </div>
            <div className='rightNav'>
                <a style={{
                    fontFamily: "Apple Chancery, cursive"
                }}>Tyna William</a>
                <a>{user}</a>
            </div>
        </div>
    )
}

export default CanvasNav

import React from 'react';
import '../../styles/canvas.css'

function CanvasNav() {
    return (
        <div className='canvasNav'>
            {document.body.classList.add("canvasNav-body")}
            <div className='leftNav'>
                <a className='styled_btn' id='canvasNav_home' href="/">Home</a>
                <a className='styled_btn' id='canvasNav_feed' href='#'>Feed</a>
            </div>
            <div className='rightNav'>
                <a>Tyna William</a>
                <a>Pic</a>
            </div>
        </div>
    )
}

export default CanvasNav

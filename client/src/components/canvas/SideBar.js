import React from 'react';
import '../../styles/canvas.css'

function SideBar() {
    return (
        <div className='sideBar'>
            {document.body.classList.add("sideBar-body")}
            <button className='sideBar-logo'>nV</button>
            <form style={{
                margin: "0 auto"
            }}>
                <input style={{
                    width: "150px",
                    background: "none",
                    border: "0",
                    fontSize: "25px",
                    paddingBottom: "20px",
                    textAlign: "center",
                    outline: "none",
                    color: "rgba(255,255,255,0.8)"
                }} type='text' placeholder='Board name' />
            </form>
            <button>Template</button>
            <button>Images</button>
            <button>Stickers</button>
            <button>Ribbons</button>
            <button>Notes</button>
        </div>
    )
}

export default SideBar

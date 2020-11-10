import React from 'react';
import '../../styles/canvas.css'
import ImageList from './ImageList';

function SideBar() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <div className='sideBar'>
                {document.body.classList.add("sideBar-body")}
                <button className='sideBar-logo'>nV</button>
                <form style={{
                    margin: "0 auto"
                }}>
                    <input style={{
                        width: "150px",
                        height: "50px",
                        background: "none",
                        border: "0",
                        fontSize: "25px",
                        paddingBottom: "20px",
                        textAlign: "center",
                        outline: "none",
                        color: "#FF914D"
                    }} type='text' placeholder='Board name' />
                </form>
                <button>Template</button>
                <button>Images</button>
                <button>Stickers</button>
                <button>Ribbons</button>
                <button>Notes</button>
            </div>
        </div>
    )
}

export default SideBar

import React from 'react'

function Board() {
    return (
        <div style={{
            backgroundColor: "lightgrey",
            height: "81.7vh"
        }}>
            <div style={{
                margin: "0 auto",
                marginTop: "70px",
                width: "700px",
                height: "500px",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                backgroundColor: "white"
            }} className='blank_canvas'>
            </div>
        </div>
    )
}

export default Board

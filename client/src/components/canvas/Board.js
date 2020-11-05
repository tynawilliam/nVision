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
                backgroundColor: "white"
            }} className='blank_canvas'>

            </div>
        </div>
    )
}

export default Board

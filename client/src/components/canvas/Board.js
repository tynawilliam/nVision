import React from 'react';
import ImageList from './ImageList';
import Target from './Target';

function Board() {
    return (
        <div style={{
            backgroundColor: "lightgrey",
            height: "81.7vh",
            display: "flex",
            flexDirection: "row"
        }}>
            <div style={{
                height: "500px",
                marginTop: "100px"
            }}>
                <ImageList />
            </div>
            {/* <Target /> */}
        </div>
    )
}

export default Board

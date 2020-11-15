import React from 'react';
import ImageList from './ImageList';
import { Canvas } from './konva/Canvas';
import { Palette } from './konva/Palette';
import Target from './Target';

function Board() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "600px"
        }}>
            <Palette />
            <Canvas />
        </div>
    )
}

export default Board

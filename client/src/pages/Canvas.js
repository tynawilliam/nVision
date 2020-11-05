import React from 'react'
import Board from '../components/canvas/Board'
import CanvasNav from '../components/canvas/CanvasNav'
import SideBar from '../components/canvas/SideBar'
import Toolbar from '../components/canvas/Toolbar'

function Canvas() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
            }}>
            <div className='col1'>
                <SideBar />
            </div>
            <div className='col2'>
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }} className='row1'>
                    <CanvasNav />
                    <Toolbar />
                    <Board />
                </div>
            </div>
        </div>
    )
}

export default Canvas

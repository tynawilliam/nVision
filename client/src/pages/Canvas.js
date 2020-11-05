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
                <div className='row1'>
                    <CanvasNav />
                </div>
                <div className='row2'>
                    <Toolbar />
                </div>
                <div className='row3'>
                    <Board />
                </div>
            </div>
        </div>
    )
}

export default Canvas

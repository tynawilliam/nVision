import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import '../../styles/carousel.css';
import { featuredList } from './FeaturedList';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
        width: '610px',
        height: '600px',
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center"
    }
};

export default function FeaturedBoards() {
    const [show, setShow] = useState(false)
    const [activeBoard, setActiveBoard] = useState({})

    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 1000, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}

    ]

    const handleClick = e => {
        const getId = e.target
        const getboard = featuredList.filter((board) => (
            board.id == e.target.id
        ))
        setShow(true)
        setActiveBoard(getboard[0])
        console.log(getboard[0])
    }
    const handleClose = () => setShow(false)
    return (
        <div className="FeaturedBoards">
            <Carousel breakPoints={breakPoints}>
                {featuredList.map((board, idx) => (
                    <Card key={idx} pic={board.board_url} boardName={board.name} boardId={board.id} handleClick={handleClick}/>
                ))}
            </Carousel>
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Example Modal'
                ariaHideApp={false}
            >
                <div className='save'>
                <img style={{
                        width: "600px",
                        height: "500px"
                    }} src={activeBoard.board_url} />
                    <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                        <h3>{activeBoard.name}</h3>
                        <h4>Created By: {activeBoard.username}</h4>
                    </div>
                </div>

            </Modal>

        </div>
    )
}

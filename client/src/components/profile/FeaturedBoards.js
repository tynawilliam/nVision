import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import '../../styles/carousel.css';
import { featuredList } from './FeaturedList';

export default function FeaturedBoards() {

    //number of items to show depending on window size
    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 1000, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}

    ]
    return (
        <div className="FeaturedBoards">
            <Carousel breakPoints={breakPoints}>
                {featuredList.map((board, idx) => (
                    <Card key={idx} pic={board.board_url} boardName={board.name}/>
                ))}
            </Carousel>
        </div>
    )
}

import React from 'react';
import { featuredList } from './FeaturedList';
import '../../styles/profile.css'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
// import ItemsCarousel from 'react-items-carousel'
// import 'pure-react-carousel/dist/react-carousel.es.css';

// import Slider from "react-slick";

function FeaturedCarousel() {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FF914D",
            width: "1400px",
            height: "350px",
            marginTop: "20px",
            marginBottom: "30px"
        }} className='featured-list'>
            {featuredList.map((board, idx) => (
                <div style={{
                    width: "300px",
                    height: "280px",
                    margin: "20px",
                    backgroundColor: "white",
                    textAlign: "center"
                }} className='featured'>
                    <img style={{
                        width: "300px"
                    }} src={board.board_url} />
                    <p> {board.name}</p>
                    <p> {board.username}</p>
                </div>
            ))}
        </div>
    )
}

export default FeaturedCarousel

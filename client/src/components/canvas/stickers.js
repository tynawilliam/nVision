import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faHeart,
    faSmile,
    faKissWinkHeart,
    faStar,
    faCoffee
} from '@fortawesome/free-solid-svg-icons'

const iconStyle = {
    width: "100px",
    height: "100px",
    color: "pink",
}

const heart = <FontAwesomeIcon icon={faHeart} style={iconStyle}/>
const smile = <FontAwesomeIcon icon={faSmile} style={iconStyle}/>
const wink = <FontAwesomeIcon icon={faKissWinkHeart} style={iconStyle}/>
const star = <FontAwesomeIcon icon={faStar} style={iconStyle} />
const coffee = <FontAwesomeIcon icon={faCoffee} style={iconStyle} />
export const stickers = [
    heart,
    smile,
    wink,
    star,
    coffee
]

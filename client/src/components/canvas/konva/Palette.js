import React, { useContext, useEffect, useState } from "react";
import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";
import OptionsContext from '../../../context/OptionsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faSmile,
  faKissWinkHeart,
  faStar,
  faCoffee
} from '@fortawesome/free-solid-svg-icons';
import Unsplash, { toJson } from 'unsplash-js';
import fetch from 'node-fetch';
global.fetch = fetch;

const stickers = [
  faHeart,
  faSmile,
  faKissWinkHeart,
  faStar,
  faCoffee
]

const iconStyle = {
  width: "100px",
  height: "100px",
}

const handleDragStart = (event) => {
  const type = event.target.dataset.shape;

  let currentPhoto = null

  if (type) {

    if(type === 'image') {
      currentPhoto = event.target.src
    }
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;

    const clientWidth = event.target.clientWidth;
    const clientHeight = event.target.clientHeight;

    const dragPayload = JSON.stringify({
      type,
      offsetX,
      offsetY,
      clientWidth,
      clientHeight,
      currentPhoto
    });

    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload);
  }
};

export function Palette() {
  const [currentOption] = useContext(OptionsContext)
  const [images, setImages ] = useState([
    {
        urls: {
            small: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg"
        }
    }
])
const [searchTerm, setSearchTerm] = useState('dog')
    const unsplash = new Unsplash({ accessKey: `8aHQQpHFrOaLp9HmUj1KNGz7xJkNgIa2WgegE3_rscE` })

    unsplash.users.profile("tynawilliam")
        .catch(err => {
            console.error(err)
        })

    useEffect(() => {
        (async() => {
            const data = await unsplash.search.photos(`${searchTerm}`, 1, 10, { orientation: "portrait", color: "green"})
            try{
                if (data.ok) {
                    const jsonData = await data.json()
                    console.log(jsonData)
                    setImages(jsonData.results)
                    // console.log(images)
                }
            }catch(err) {
                console.error(err)
            }
        })()
    }, [searchTerm])

    const getWord = e => {
        setSearchTerm(e.target.value)
    }

  if (currentOption === 'shapes'){

    return (
      <aside className="palette">
        <div
          className="shape rectangle"
          data-shape={SHAPE_TYPES.RECT}
          draggable
          onDragStart={handleDragStart}
        />
        <div
          className="shape circle"
          data-shape={SHAPE_TYPES.CIRCLE}
          draggable
          onDragStart={handleDragStart}
        />
      </aside>
    );
  } else if (currentOption === 'images'){
    return (
      <aside className="palette">
        <form>
          <input type='text' value={searchTerm} onChange={getWord} style={{
              backgroundColor: "whitesmoke",
              border: "1px solid grey",
              textAlign: "center",
              height: "30px",
              margin: "10px",
          }}/>
          {/* <button type='submit' onSubmit={getSearch} style={{
              border: "1px solid grey"
          }}>Search</button> */}
                </form>
        <div style={{
            height: "600px",
            overflowY: "auto"
          }}>
          {images.map((img, idx) => (
            <div key={idx}>
              <img
                crossOrigin='Anonymous'
                src={img.urls.small}
                data-shape={SHAPE_TYPES.PHOTO}
                draggable
                onDragStart={handleDragStart}
                alt='Not Found'
                style={{
                  width: "150px",
                  height: "150px",
                  margin:"10px",
                }}
              />
            </div>
          ))}
        </div>
      </aside>
    )
  } else if (currentOption === 'stickers') {
    return (
      <aside className="palette">
        {stickers.map((sticker, idx) => (
          <div key={idx} style={{
            width: "170px",
            textAlign: "center"
            }}
            draggable
            >
            <FontAwesomeIcon icon={sticker} style={iconStyle}/>
          </div>

        ))}
      </aside>
    )
  }
}

import React, { useContext, useEffect } from "react";
import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";
import  PhotoContext  from '../../../context/PhotoContext';
import OptionsContext from '../../../context/OptionsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faSmile,
  faKissWinkHeart,
  faStar,
  faCoffee
} from '@fortawesome/free-solid-svg-icons'

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
  useEffect(() => console.log(`Hey there ${currentOption}`), [currentOption])

  const { photos } = useContext(PhotoContext)
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
        <div style={{
            height: "600px",
            overflowY: "auto"
          }}>
          {photos.map((photo, idx) => (
            <div key={photo.id}>
              <img
                src={photo.url}
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

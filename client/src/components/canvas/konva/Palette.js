import React, { useContext } from "react";
import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";
import  PhotoContext  from '../../../context/PhotoContext';

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
    console.log(dragPayload)
    console.log(event.nativeEvent)
  }
};

export function Palette() {

  const { photos } = useContext(PhotoContext)
  return (
    <aside className="palette">
      <h2>Shapes</h2>
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
              height: "150px"
            }}
          />
        </div>
      ))}
    </aside>
  );
}

import React, { useRef, useCallback, useState, useEffect } from "react";
import { Layer, Stage } from "react-konva";

import {
  useShapes,
  clearSelection,
  createCircle,
  createRectangle,
  createPhoto,
  saveDiagram,
  reset,
} from "./state";
import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";
import { Shape } from "./Shape";

const handleDragOver = (event) => event.preventDefault();

export function Canvas() {
  const shapes = useShapes((state) => Object.entries(state.shapes));
  const [photos, setPhotos] = useState([])

  const stageRef = useRef();
  useEffect(() => console.log(shapes),[shapes])

  const handleDrop = useCallback((event) => {
    const draggedData = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY);

    console.log('Dragged Data')
    console.log(draggedData)
    if (draggedData) {
      const { offsetX, offsetY, type, clientHeight, clientWidth, currentPhoto } = JSON.parse(
        draggedData
      );

      stageRef.current.setPointersPositions(event);

      const coords = stageRef.current.getPointerPosition();

      if (type === SHAPE_TYPES.RECT) {
        // rectangle x, y is at the top,left corner
        createRectangle({
          x: coords.x - offsetX,
          y: coords.y - offsetY,
        });
      } else if (type === SHAPE_TYPES.CIRCLE) {
        // circle x, y is at the center of the circle
        createCircle({
          x: coords.x - (offsetX - clientWidth / 2),
          y: coords.y - (offsetY - clientHeight / 2),
        });
      } else if (type === SHAPE_TYPES.PHOTO) {
        setPhotos((state) => (
          [...state, currentPhoto]
        ))

        createPhoto({
          currentPhoto: currentPhoto,
          x: coords.x - offsetX,
          y: coords.y - offsetY,
          height: clientHeight,
          width: clientWidth
        })
      }
    }
  }, []);
  console.log(stageRef.current)

  return (
    <main className="k-canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="buttons">
        <button onClick={saveDiagram}>Save</button>
        <button onClick={reset}>Reset</button>
      </div>
      <Stage
        ref={stageRef}
        width={window.innerWidth - 400}
        height={window.innerHeight}
        onClick={clearSelection}
      >
        <Layer>
          {shapes.map(([key, shape]) => (
            <Shape key={key} shape={{ ...shape, id: key }} />
          ))}
        </Layer>
      </Stage>
    </main>
  );
}

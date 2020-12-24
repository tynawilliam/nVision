import React, { useRef, useCallback, useState, useEffect, useContext } from "react";
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
import BoardContext from "../../../context/BoardContext";
import AuthContext from "../../../context/AuthContext";

const handleDragOver = (event) => event.preventDefault();

export function Canvas() {
  const shapes = useShapes((state) => Object.entries(state.shapes));
  const [photos, setPhotos] = useState([])
  const [boardName]  = useContext(BoardContext)
  const {currentUser} = useContext(AuthContext)

  const stageRef = useRef();

  const handleDrop = useCallback((event) => {
    const draggedData = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY);

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

  // const downloadImg = () => {
  //   console.log('saved')
  //   console.log(stageRef.current)
  //   const dataUrl = stageRef.current.toDataURL()
  //   console.log(dataUrl)
  //   const name = `${boardName}.png`
  //   const link = document.createElement('a')
  //   link.download = name
  //   link.href = dataUrl
  //   document.body.appendChild(link)
  //   link.click();
  //   document.body.removeChild(link)
  // }

  const dataURItoBlob = (dataURI) => {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

  const saveBoard = (async(e) => {
    if (boardName === ''){
      window.alert('Add a board name')
    } else{

      const dataUrl = stageRef.current.toDataURL()
      const blob = dataURItoBlob(dataUrl)
      const formData = new FormData(document.forms[0]);
      formData.append("file", blob, `${boardName}.jpeg`)
      // formData.append("title", "new")
      const res = await fetch('/api/uploads/', {
        method: 'POST',
        body: formData
      });

      const data = {
        user_id: currentUser.id,
        username: currentUser.username,
        name: boardName,
        board_url : `https://nvision.s3.us-east-2.amazonaws.com/${boardName}.jpeg`,
        is_private: false


      }
      try{
        const res = await fetch(`/api/boards/`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
      } catch (e) {
          console.error(e)
    }
    reset()
    // window.location.href = 'http://localhost:3000/profile'
    }
  window.location.href = 'http://nvision-app.herokuapp.com/profile'
})


  return (
    <main className="k-canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="buttons">
        <button onClick={saveDiagram}>Save For Later</button>
        <button onClick={reset}>Reset</button>
        <button onClick={saveBoard}>Save Board</button>
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

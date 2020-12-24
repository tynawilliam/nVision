import React, { useRef, useEffect, useCallback } from "react";
import { Image as KonvaImage, Transformer } from "react-konva";
import { LIMITS } from "./constants";
import { selectShape, transformPhotoShape, moveShape } from "./state";
import useImage from 'use-image';

const boundBoxCallbackForPhoto = (oldBox, newBox) => {
  // limit resize
  if (
    newBox.width < LIMITS.PHOTO.MIN ||
    newBox.height < LIMITS.PHOTO.MIN ||
    newBox.width > LIMITS.PHOTO.MAX ||
    newBox.height > LIMITS.PHOTO.MAX
  ) {
    return oldBox;
  }
  return newBox;
};

export function Photo({ id, isSelected, type, ...shapeProps }) {
  const shapeRef = useRef();
  const transformerRef = useRef();
    const { url } = shapeProps;

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([shapeRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const image = new Image();
  image.setAttribute('src', url)
  // image.src = url;
  // const [image] = useImage(url)
  // if (image){
  //   image.crossOrigin = 'Anonymous';
  // }

  const handleSelect = useCallback(
    (event) => {
      event.cancelBubble = true;

      selectShape(id);
    },
    [id]
  );

  const handleDrag = useCallback(
    (event) => {
      moveShape(id, event);
    },
    [id]
  );

  const handleTransform = useCallback(
    (event) => {
      transformPhotoShape(shapeRef.current, id, event);
    },
    [id]
  );
    if (image){
      image.crossOrigin = 'anonymous';
    }
  return (
    <>
    {image.crossOrigin ?
      <KonvaImage
        onClick={handleSelect}
        onTap={handleSelect}
        onDragStart={handleSelect}
        image={image}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={handleDrag}
        onTransformEnd={handleTransform}
      /> : null}
      {isSelected && (
        <Transformer
          keepRatio={true}
          anchorSize={5}
          borderDash={[6, 2]}
          ref={transformerRef}
          boundBoxFunc={boundBoxCallbackForPhoto}
        />
      )}
    </>
  );
}

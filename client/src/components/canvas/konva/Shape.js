import React, { useCallback } from "react";

import { SHAPE_TYPES } from "./constants";
import { useShapes } from "./state";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Photo } from "./Photo";
// import { shapes } from "konva/types/Shape";

export function Shape({ shape }) {
  // console.log('State shape')
  // console.log(shape)
  const isSelectedSelector = useCallback(
    (state) => state.selected === shape.id,
    [shape]
  );
  const isSelected = useShapes(isSelectedSelector);

  if (shape.type === SHAPE_TYPES.RECT) {
    return <Rectangle {...shape} isSelected={isSelected} />;
  } else if (shape.type === SHAPE_TYPES.CIRCLE) {
    return <Circle {...shape} isSelected={isSelected} />;
  } else if (shape.type === SHAPE_TYPES.PHOTO) {
    return <Photo {...shape} isSelected={isSelected} />
  }

  return null;
}
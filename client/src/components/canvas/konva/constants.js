export const SHAPE_TYPES = {
  RECT: "rect",
  CIRCLE: "circle",
  PHOTO: "image"
};

export const DEFAULTS = {
  RECT: {
    STROKE: "#FFFFFF",
    FILL: "#FF914D",
    WIDTH: 150,
    HEIGHT: 100,
    ROTATION: 0,
  },
  CIRCLE: {
    STROKE: "#FFFFFF",
    FILL: "#FF914D",
    RADIUS: 50,
  },
  PHOTO: {
    STROKE: "#FFF000",
    ROTATION: 0,
  },
};

export const LIMITS = {
  RECT: {
    MAX: 1000,
    MIN: 10,
  },
  CIRCLE: {
    MAX: 500,
    MIN: 5,
  },
  PHOTO: {
    MAX: 1000,
    MIN: 10,
  },
};

export const DRAG_DATA_KEY = "__drag_data_payload__";

export const SHAPE_TYPES = {
  RECT: "rect",
  CIRCLE: "circle",
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
};

export const DRAG_DATA_KEY = "__drag_data_payload__";

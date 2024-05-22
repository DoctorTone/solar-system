import { Vector3 } from "three";

const SCENE = {
  FOV: 45,
  NEAR: 1,
  FAR: 10000,
  cameraPosition: new Vector3(0, 250, 1200),
  lightPosition: new Vector3(0, 0, 0),
  ambientIntensity: 1,
  FONT_SIZE: 15,
  FONT_OUTLINE_WIDTH: 1.5,
  RING_SEGMENTS: 128,
};

const PLANET_SCALE = 2;

const SUN = {
  radius: 109.167 * PLANET_SCALE,
  colour: 0xffffff,
  intensity: 1000,
  distance: 0,
};

const START_DISTANCE = 250;
const PLANET_GAP = 70;

const PLANETS = {
  MERCURY: {
    distance: START_DISTANCE,
    radius: 0.383 * PLANET_SCALE,
    angle: -2.094,
  },
  VENUS: {
    distance: START_DISTANCE + PLANET_GAP,
    radius: 0.95 * PLANET_SCALE,
    angle: -0.7,
  },
  EARTH: {
    distance: START_DISTANCE + PLANET_GAP * 2,
    radius: 1 * PLANET_SCALE,
    angle: -0.262,
  },
  MARS: {
    distance: START_DISTANCE + PLANET_GAP * 3,
    radius: 0.532 * PLANET_SCALE,
    angle: Math.PI,
  },
  JUPITER: {
    distance: START_DISTANCE + PLANET_GAP * 4,
    radius: 10.973 * PLANET_SCALE,
    angle: -1.745,
  },
  SATURN: {
    distance: START_DISTANCE + PLANET_GAP * 5,
    radius: 9.14 * PLANET_SCALE,
    angle: 0,
  },
  URANUS: {
    distance: START_DISTANCE + PLANET_GAP * 6,
    radius: 3.981 * PLANET_SCALE,
    angle: -2.7,
  },
  NEPTUNE: {
    distance: START_DISTANCE + PLANET_GAP * 7,
    radius: 3.865 * PLANET_SCALE,
    angle: -1.222,
  },
};

export { SCENE, SUN, PLANETS };

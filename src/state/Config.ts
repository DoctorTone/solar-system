import { Vector3 } from "three";

const SCENE = {
  cameraPosition: new Vector3(0, 0, 800),
  lightPosition: new Vector3(0, 0, 0),
  ambientIntensity: 1,
};

const SUN = {
  radius: 109.167,
  colour: 0xffffff,
  intensity: 1000,
  distance: 0,
};

const START_DISTANCE = 150;
const PLANET_GAP = 70;

const PLANETS = {
  MERCURY: {
    distance: START_DISTANCE,
    radius: 0.383,
  },
  VENUS: {
    distance: START_DISTANCE + PLANET_GAP,
    radius: 0.95,
  },
  EARTH: {
    distance: START_DISTANCE + PLANET_GAP * 2,
    radius: 1,
  },
  MARS: {
    distance: START_DISTANCE + PLANET_GAP * 3,
    radius: 0.532,
  },
  JUPITER: {
    distance: START_DISTANCE + PLANET_GAP * 4,
    radius: 10.973,
  },
  SATURN: {
    distance: START_DISTANCE + PLANET_GAP * 5,
    radius: 9.14,
  },
  URANUS: {
    distance: START_DISTANCE + PLANET_GAP * 6,
    radius: 3.981,
  },
  NEPTUNE: {
    distance: START_DISTANCE + PLANET_GAP * 7,
    radius: 3.865,
  },
};

export { SCENE, SUN, PLANETS };

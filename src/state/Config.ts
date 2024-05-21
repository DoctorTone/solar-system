import { Vector3 } from "three";

const SCENE = {
  cameraPosition: new Vector3(0, 0, 30),
  lightPosition: new Vector3(0, 0, 0),
  ambientIntensity: 1,
};

const SUN = {
  radius: 70,
  colour: 0xffffff,
  intensity: 1000,
  distance: 0,
};

const PLANETS = {
  MERCURY: {
    distance: 115,
    radius: 1,
  },
  VENUS: {
    distance: 30,
    radius: 1,
  },
  EARTH: {
    distance: 100,
    radius: 0.64,
  },
  MARS: {
    distance: 60,
    radius: 1,
  },
  JUPITER: {
    distance: 75,
    radius: 10.973,
  },
  SATURN: {
    distance: 90,
    radius: 1,
  },
  URANUS: {
    distance: 105,
    radius: 1,
  },
  NEPTUNE: {
    distance: 120,
    radius: 1,
  },
};

export { SCENE, SUN, PLANETS };

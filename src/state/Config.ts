import { Vector3 } from "three";

const SCENE = {
  cameraPosition: new Vector3(0, 0, 30),
  lightPosition: new Vector3(0, 0, 0),
  ambientIntensity: 1,
};

const SUN = {
  radius: 10,
  colour: 0xffffff,
  intensity: 1000,
  distance: 0,
};

const PLANETS = {
  MERCURY: {
    distance: 15,
    radius: 1,
  },
  VENUS: {
    distance: 30,
    radius: 1,
  },
  EARTH: {
    distance: 45,
    radius: 1,
  },
  MARS: {
    distance: 60,
    radius: 1,
  },
  JUPITER: {
    distance: 75,
    radius: 1,
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

import { Vector3 } from "three";

const SCENE = {
  cameraPosition: new Vector3(0, 0, 30),
  lightPosition: new Vector3(1, 1, 3),
  ambientIntensity: 1,
};

const SUN = {
  radius: 10,
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
};

export { SCENE, SUN, PLANETS };

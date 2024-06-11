import { Vector3 } from "three";
import { isSmallDevice } from "../Utils/screenUtils";

const SCENE = {
  FOV: 45,
  NEAR: 1,
  FAR: 10000,
  cameraPosition: isSmallDevice()
    ? new Vector3(0, 250, 1400)
    : new Vector3(0, 250, 1200),
  lightPosition: new Vector3(0, 0, 0),
  ambientIntensity: 1,
  FONT_SIZE: isSmallDevice() ? 5 : 15,
  FONT_OUTLINE_WIDTH: 0.5,
  RING_SEGMENTS: 128,
  ROTATION_AXIS: new Vector3(0, 1, 0),
  ANIMATION_SPEED: 0.25,
  STAR_RADIUS: 1000,
  PLANET_RADIUS: 1,
  PLANET_WIDTH_SEGMENTS: 64,
  PLANET_HEIGHT_SEGMENTS: 64,
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
    tilt: 0,
    rotationSpeed: (2 * Math.PI) / 8720,
    animationSpeed: 0.25,
    viewPosition: new Vector3(-153, 15, 265),
  },
  VENUS: {
    distance: START_DISTANCE + PLANET_GAP,
    radius: 0.95 * PLANET_SCALE,
    angle: -0.7,
    tilt: 3.09,
    rotationSpeed: (2 * Math.PI) / 14484,
    animationSpeed: 0.25,
    viewPosition: new Vector3(275, 15, 232),
  },
  EARTH: {
    distance: START_DISTANCE + PLANET_GAP * 2,
    radius: 1 * PLANET_SCALE,
    angle: -0.262,
    tilt: 0.41,
    rotationSpeed: (2 * Math.PI) / 60,
    animationSpeed: 0.25,
    viewPosition: new Vector3(425, 15, 115),
  },
  MARS: {
    distance: START_DISTANCE + PLANET_GAP * 3,
    radius: 0.532 * PLANET_SCALE,
    angle: Math.PI,
    tilt: 0.44,
    rotationSpeed: (2 * Math.PI) / 109.05,
    animationSpeed: 0.25,
    viewPosition: new Vector3(-515, 15, 0),
  },
  JUPITER: {
    distance: START_DISTANCE + PLANET_GAP * 4,
    radius: 10.973 * PLANET_SCALE,
    angle: -1.745,
    tilt: 0.05,
    rotationSpeed: (2 * Math.PI) / 2.07,
    animationSpeed: 0.25,
    viewPosition: new Vector3(-110, 20, 630),
  },
  SATURN: {
    distance: START_DISTANCE + PLANET_GAP * 5,
    radius: 9.14 * PLANET_SCALE,
    angle: 0,
    tilt: 0.47,
    rotationSpeed: (2 * Math.PI) / 2.56,
    animationSpeed: 0.25,
    viewPosition: new Vector3(700, 15, 0),
  },
  URANUS: {
    distance: START_DISTANCE + PLANET_GAP * 6,
    radius: 3.981 * PLANET_SCALE,
    angle: -2.7,
    tilt: 1.71,
    rotationSpeed: (2 * Math.PI) / 6.38,
    animationSpeed: 0.25,
    viewPosition: new Vector3(-670, 15, 317),
  },
  NEPTUNE: {
    distance: START_DISTANCE + PLANET_GAP * 7,
    radius: 3.865 * PLANET_SCALE,
    angle: -1.222,
    tilt: 0.49,
    rotationSpeed: (2 * Math.PI) / 9.72,
    animationSpeed: 0.25,
    viewPosition: new Vector3(277, 15, 760),
  },
};

const MODALS = {
  NONE: 0,
  MERCURY: 1,
  VENUS: 2,
  EARTH: 3,
  MARS: 4,
  JUPITER: 5,
  SATURN: 6,
  URANUS: 7,
  NEPTUNE: 8,
  SUN: 9,
};

export { SCENE, SUN, PLANETS, MODALS };

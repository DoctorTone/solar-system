import { Suspense, useEffect } from "react";
import Sun from "./Planets/Sun";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Earth from "./Planets/Earth";
import Mars from "./Planets/Mars";
import Jupiter from "./Planets/Jupiter";
import Saturn from "./Planets/Saturn";
import Uranus from "./Planets/Uranus";
import Neptune from "./Planets/Neptune";
import { Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import useStore from "../state/store";
import { Loading } from "../UI/Loading";
import { SCENE, PLANETS, MODALS } from "../state/Config";

const System = () => {
  const { camera } = useThree();
  const currentView = useStore((state) => state.currentView);
  const toggleShowPaths = useStore((state) => state.toggleShowPaths);
  const setVisibleModal = useStore((state) => state.setVisibleModal);

  useEffect(() => {
    switch (currentView) {
      case "start":
        camera.position.copy(SCENE.cameraPosition);
        toggleShowPaths(true);
        setVisibleModal(MODALS.NONE);
        break;

      case "mercury":
        camera.position.copy(PLANETS.MERCURY.viewPosition);
        toggleShowPaths(false);
        setVisibleModal(MODALS.MERCURY);
        break;

      case "venus":
        camera.position.copy(PLANETS.VENUS.viewPosition);
        toggleShowPaths(false);
        setVisibleModal(MODALS.VENUS);
        break;

      case "earth":
        camera.position.copy(PLANETS.EARTH.viewPosition);
        toggleShowPaths(false);
        setVisibleModal(MODALS.EARTH);
        break;

      case "mars":
        camera.position.copy(PLANETS.MARS.viewPosition);
        toggleShowPaths(false);
        setVisibleModal(MODALS.MARS);
        break;

      case "jupiter":
        camera.position.copy(PLANETS.JUPITER.viewPosition);
        toggleShowPaths(true);
        setVisibleModal(MODALS.JUPITER);
        break;

      case "saturn":
        camera.position.copy(PLANETS.SATURN.viewPosition);
        toggleShowPaths(true);
        setVisibleModal(MODALS.SATURN);
        break;

      case "uranus":
        camera.position.copy(PLANETS.URANUS.viewPosition);
        toggleShowPaths(true);
        setVisibleModal(MODALS.URANUS);
        break;

      case "neptune":
        camera.position.copy(PLANETS.NEPTUNE.viewPosition);
        toggleShowPaths(true);
        setVisibleModal(MODALS.NEPTUNE);
        break;

      default:
        break;
    }
  }, [currentView]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Stars radius={SCENE.STAR_RADIUS} />
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </Suspense>
    </>
  );
};

export default System;

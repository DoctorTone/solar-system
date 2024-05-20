import { Sphere } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Venus = () => {
  return (
    <Sphere position-x={PLANETS.VENUS.distance}>
      <meshStandardMaterial color={"blue"} />
    </Sphere>
  );
};

export default Venus;

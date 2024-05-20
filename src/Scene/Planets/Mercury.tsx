import { Sphere } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Mercury = () => {
  return (
    <Sphere position-x={PLANETS.MERCURY.distance}>
      <meshStandardMaterial color={"yellow"} />
    </Sphere>
  );
};

export default Mercury;

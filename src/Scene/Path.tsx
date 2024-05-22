import { DoubleSide } from "three";
import {Ring} from "@react-three/drei"
import { PLANETS } from "../state/Config"

const Path = () => {
    return (
        <Ring args={[PLANETS.MERCURY.distance, PLANETS.MERCURY.distance+1, 32] } 
        rotation-x={Math.PI / 2}>
            <meshStandardMaterial side={DoubleSide} />
        </Ring>
    )
}

export default Path;
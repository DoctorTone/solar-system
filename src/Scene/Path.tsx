import { DoubleSide } from "three";
import {Ring} from "@react-three/drei"
import { PLANETS } from "../state/Config"

type RingProps = {
startDistance: number;
}

const Path: React.FC<RingProps> = ({startDistance}) => {
    return (
        <Ring args={[startDistance, startDistance+1, 32] } 
        rotation-x={Math.PI / 2}>
            <meshStandardMaterial side={DoubleSide} />
        </Ring>
    )
}

export default Path;
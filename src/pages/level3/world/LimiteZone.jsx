import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";

export default function LimiteZone({ position, fueraDelMapa }) {
    const squareRef = useRef();

    const onCollisionEnter = ({ manifold, target, other }) => {
        if (other.colliderObject.name == "character-capsule-collider") {
            fueraDelMapa();
        }
    };

    return (
        <RigidBody type="fixed" position={position} onCollisionEnter={(e) => onCollisionEnter(e)}>
            <mesh ref={squareRef} rotation={[0, 0, 0]} >
                <boxGeometry args={[150, 1, 250]} />
                <meshStandardMaterial transparent={0} opacity={0} />
            </mesh>
        </RigidBody>
    );
}
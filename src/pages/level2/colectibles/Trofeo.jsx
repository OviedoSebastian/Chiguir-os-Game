import { useEffect, useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function Trofeo ({  finishedLeveL }) {
    const squareRef = useRef();

    const onCollisionEnter = ({ manifold, target, other }) => {
        if (other.colliderObject.name == "character-capsule-collider") {
            // Resta una vida
            console.log("PORQUENOFUNCIONAAAA");
            finishedLeveL();
            console.log("ME TOCASTE BRO :0");
        } else {
            console.log(
                // this rigid body's Object3D
                target.rigidBodyObject,
                " collided with ",
                // the other rigid body's Object3D
                other.rigidBodyObject
            );
        }
    };

    return (
        <RigidBody type="fixed" position={[-87.1, 69, 12]} onCollisionEnter={(e) => onCollisionEnter(e)}>
            <mesh ref={squareRef} rotation={[0, 0, 0]}>
                <boxGeometry args={[3,4,4.5]} />
                <meshStandardMaterial transparent opacity={4}/>
            </mesh>
        </RigidBody>
    );
}

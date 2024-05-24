import { useEffect, useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function Final({ position, finishedLeveL }) {
    const squareRef = useRef();

    const speed = 2;

    const onCollisionEnter = ({ manifold, target, other }) => {
        if (other.colliderObject.name == "character-capsule-collider") {
            // Resta una vida
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

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const angle = elapsedTime * speed;
        if (squareRef.current) {
            squareRef.current.rotation.y = angle;
        }
    });

    return (
        <RigidBody type="fixed" position={position} onCollisionEnter={(e) => onCollisionEnter(e)}>
            <mesh ref={squareRef} rotation={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh>
        </RigidBody>
    );
}

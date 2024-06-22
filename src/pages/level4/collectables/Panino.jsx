import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Panino({ catchObject }) {
    const { nodes, materials } = useGLTF("/assets/models/colectables/Panino.glb");
    const [paninoSound] = useState(new Audio("/assets/sounds/QueRico.mp3"));
    const [position, setPosition] = useState([14, 3.2, -47.2]);
    const [visible, setVisible] = useState(true);
    const refRigidBody = useRef();
    const requestRef = useRef();
    const radius = 0.3;
    const speed = 5;

    const animate = () => {
        if (refRigidBody.current && visible) {
            const elapsedTime = Date.now() / 1000; // Tiempo en segundos
            const angle = elapsedTime * speed;
            const x = Math.sin(angle) * radius;
            const y = Math.cos(angle) * radius;

            // Actualiza la posición y la rotación
            refRigidBody.current.setTranslation(
                {
                    x: position[0],
                    y: position[1] + y,
                    z: position[2],
                },
                true
            );

            refRigidBody.current.setRotation({ x: 0, y: angle, z: 0 }, true);
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [visible, position]);

    const onCollisionEnter = ({ manifold, target, other }) => {
        if (other.colliderObject.name === "character-capsule-collider") {
            // setVisible(false);
            console.log("Tomaste el panino");
            paninoSound.play();
            catchObject();
            // setVisible(false);
            // catchObject();
        }
    };

    return (
        <>
            {visible ? (
                <RigidBody
                    ref={refRigidBody}
                    type="fixed"
                    colliders="cuboid"
                    onCollisionEnter={(e) => onCollisionEnter(e)}
                    name="Panino"
                    position={[14, 3, -47.2]}
                >
                    <group dispose={null} ref={refRigidBody}>
                        <mesh
                            geometry={nodes.PaninoPan.geometry}
                            material={materials.Pan}
                        />
                        <mesh
                            geometry={nodes.PaninoPan_1.geometry}
                            material={materials.Pan2}
                        />
                        <mesh
                            geometry={nodes.PaninoPan_2.geometry}
                            material={materials.Lechuga}
                        />
                        <mesh
                            geometry={nodes.PaninoPan_3.geometry}
                            material={materials.Jamon}
                        />
                        <mesh
                            geometry={nodes.PaninoPan_4.geometry}
                            material={materials.Queso}
                        />
                    </group>
                </RigidBody>
            ) : null}
        </>
    );
}

useGLTF.preload("/assets/models/colectables/Panino.glb");

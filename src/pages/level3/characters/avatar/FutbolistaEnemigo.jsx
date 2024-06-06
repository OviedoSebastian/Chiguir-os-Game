import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function FutbolistaEnemigo ({ position, loseLife, changeSpeed }) {
    const avatarFutbolistaUscRef = useRef();
    const avatarFutbolistaUscBodyRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF(
        "/assets/models/avatars/futbolista_usc.glb"
    );
    const lastCollisionTime = useRef(0); // Referencia para almacenar la marca de tiempo de la última colisión

    // refRigidBody.current.rotation.y = Math.cos(clock.getElapsedTime());


    const [soundGhost] = useState(new Audio("/assets/sounds/Boo.mp3"));

    return (
        <RigidBody
            ref={avatarFutbolistaUscBodyRef}
            type="fixed"
            position={position}
            onCollisionEnter={(e) => onCollisionEnter(e)}
        >
            <group ref={avatarFutbolistaUscRef} name="Scene" position-y={10} >
                <group>
                    <mesh geometry={nodes.Futbolista2_Body.geometry} material={materials.Camiseta_mat} />
                    <mesh geometry={nodes.Futbolista2_Mochito.geometry} material={materials.Mochito_mat} />
                    <mesh geometry={nodes.Futbolista2_Shoes.geometry} material={materials.Shoes_mat} />
                    <mesh
                        geometry={nodes.Futbolista2_Hair.geometry}
                        material={materials.hair_mat}
                        position={[0, 0.078, 0]}
                        scale={[0.874, 0.933, 1]}
                    />
                    <mesh
                        geometry={nodes.Futbolista2_Hands.geometry}
                        material={materials['piel.001']}
                        position={[-0.01, 0.519, -0.017]}
                    />
                    <mesh geometry={nodes.Futbolista2_Head.geometry} material={materials.piel} />
                </group>
            </group>
        </RigidBody>
    );
}

useGLTF.preload("/assets/models/avatars/futbolista_usc.glb");

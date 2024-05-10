import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function AvatarVigilant({ position, loseLife }) {
    const avatarVigilantRef = useRef();
    const avatarVigilantBodyRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF(
        "/assets/models/avatars/Vigilant.glb"
    );

    const { actions } = useAnimations(animations, avatarVigilantRef);

    console.log();
    const radius = 15
    const speed = 1

    useEffect(() => {
        actions[avatar.animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[avatar.animation]) actions[avatar.animation].fadeOut(0.5);
        };
    }, [actions, avatar.animation]);

    // refRigidBody.current.rotation.y = Math.cos(clock.getElapsedTime());

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const angle = elapsedTime * speed;
        const x = Math.cos(angle) * radius;
        avatarVigilantBodyRef.current.rotation.y = Math.cos(elapsedTime);

        avatarVigilantBodyRef.current?.setTranslation(
            {
                x: position[0] + x,
                y: position[1],
                z: position[2],
            },
            true
        );
    });

    const [runSound] = useState(new Audio("/assets/sounds/laugh.mp3"));

    const onCollisionEnter = ({ manifold, target, other }) => {
        if (other.colliderObject.name == "character-capsule-collider") {
            console.log("Checkpoint");
            runSound.play();
            // Resta una vida
            loseLife();
        } else {
            console.log(
                // this rigid body's Object3D
                target.rigidBodyObject,
                " collided with ",
                // the other rigid body's Object3D
                other.rigidBodyObject
            );
        }
    }

    return (
        <RigidBody
            ref={avatarVigilantBodyRef}
            type='fixed'
            position={position}
            onCollisionEnter={(e) => onCollisionEnter(e)}
        >
            <group ref={avatarVigilantRef} name="Scene" position-y={-0.82}>
                <group name="Armature" scale={0.2} rotation={[0, 0, 0]}>
                    <mesh
                        geometry={nodes.Vigilant_shoes.geometry}
                        material={materials['Material.002']}
                        position={[0.252, 0.254, 0.025]}
                    />
                    <mesh
                        geometry={nodes.Vigilant_legs.geometry}
                        material={materials['Material.003']}
                        position={[-0.02, 0.699, 0.022]}
                    />
                    <mesh
                        geometry={nodes.Vigilant_Head.geometry}
                        material={materials['piel.001']}
                        position={[0.115, 4.476, -0.037]}
                    />
                    <mesh
                        geometry={nodes.Vigilant_Hands.geometry}
                        material={materials['piel.001']}
                        position={[0.005, 1.951, 0.027]}
                    />
                    <mesh
                        geometry={nodes.Vigilant_Eyes.geometry}
                        material={materials['eyes_material.001']}
                        position={[1.373, 4.404, 0.011]}
                    />
                    <mesh
                        geometry={nodes.Vigilant_Body.geometry}
                        material={materials['coat_material.001']}
                        position={[0.203, 2.78, 0.016]}
                    />
                    <mesh
                        geometry={nodes.Vigilant_eyebrows.geometry}
                        material={materials.m_hair}
                        position={[1.441, 4.854, 0.037]}
                    />
                    <mesh
                        geometry={nodes.Vigilant_hair.geometry}
                        material={materials.m_hair}
                        position={[-0.138, 5.316, -0.072]}
                    />
                    <mesh
                        geometry={nodes.Belt.geometry}
                        material={materials.defaultMat}
                        position={[0.375, 1.542, 0.028]}
                    />
                    <mesh
                        geometry={nodes.Radio.geometry}
                        material={materials.Walkie_talkie}
                        position={[0.079, 1.644, 0.809]}
                    />
                    <mesh
                        geometry={nodes.Calgante_metalico.geometry}
                        material={materials['Material.004']}
                        position={[0.533, 2.391, -0.298]}
                    />
                    <mesh
                        geometry={nodes.Card.geometry}
                        material={materials['Material.007']}
                        position={[0.528, 2.305, -0.296]}
                    />
                    <mesh
                        geometry={nodes.Colgante.geometry}
                        material={materials['Material.005']}
                        position={[0.529, 2.492, -0.297]}
                    />
                    <mesh
                        geometry={nodes.id_text.geometry}
                        material={materials['Material.008']}
                        position={[0.528, 2.283, -0.305]}
                        rotation={[1.512, -0.236, -1.831]}
                        scale={0.058}
                    />
                </group>
            </group>
        </ RigidBody>
    );
}

useGLTF.preload("/assets/models/avatars/Vigilant.glb")
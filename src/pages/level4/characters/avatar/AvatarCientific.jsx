import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import Ecctrl from "ecctrl";
import { useFrame } from "@react-three/fiber";

export default function AvatarCientific({ vida, resetPoint, offTheMap, dentroDelMapa }) {

    const avatarCientificRef = useRef();
    const rigidBodyAvatarCientificRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/avatars/Cientific.glb');
    const { actions } = useAnimations(animations, avatarCientificRef);
    // Estado para almacenar la posición del avatar
    const [position, setPosition] = useState({ x: 0, y:0 , z: 0 });

    useEffect(() => {
        setAvatar({
            ...avatar,
            avatarRef: avatarCientificRef?.current,
            rigidBodyAvatarRef: rigidBodyAvatarCientificRef?.current

        });

    }, [avatarCientificRef?.current, rigidBodyAvatarCientificRef?.current]);


    useEffect(() => {

        if (vida <= 0) {

            rigidBodyAvatarCientificRef.current?.setTranslation(
                {
                    x: 12,
                    y: 20,
                    z: -10,
                },
                true
            );
            resetPoint()
        }
    }, [vida]);


    useEffect(() => {
        actions[avatar.animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[avatar.animation]) actions[avatar.animation].fadeOut(0.5);
        };
    }, [actions, avatar.animation]);

    // Efecto por si se cae el personaje del mapa xd
    useEffect(() => {
        if (offTheMap) {
            rigidBodyAvatarCientificRef.current?.setTranslation(
                {
                    x: 120,
                    y: 10,
                    z: -8,
                },
                true
            );
            dentroDelMapa();
        }
    }, [offTheMap]);

    /*
    // Actualiza la posición en cada frame
    useFrame(() => {
        if (rigidBodyAvatarCientificRef.current) {
            const { x, y, z } = rigidBodyAvatarCientificRef.current.translation();
            setPosition({ x, y, z });
            console.log(position);
        }
    });
    */
    return (
        <Ecctrl
            ref={rigidBodyAvatarCientificRef}
            capsuleHalfHeight={0.5}
            floatingDis={0.2}
            camInitDis={-3}
            camMaxDis={-4}
            maxVelLimit={6}
            position={[12, 6, -10]}
            jumpVel={6}
            name="avatar-cientific"
        // position={[12, 8, -11]}
        >
            <group ref={avatarCientificRef} name="Scene" position-y={-0.80}>
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.002}>
                    <skinnedMesh
                        name="Caot_botons"
                        geometry={nodes.Caot_botons.geometry}
                        material={materials.boton_material}
                        skeleton={nodes.Caot_botons.skeleton}
                    />
                    <skinnedMesh
                        name="Cientific_Body"
                        geometry={nodes.Cientific_Body.geometry}
                        material={materials.coat_material}
                        skeleton={nodes.Cientific_Body.skeleton}
                    />
                    <skinnedMesh
                        name="Cientific_eyes"
                        geometry={nodes.Cientific_eyes.geometry}
                        material={materials.eyes_material}
                        skeleton={nodes.Cientific_eyes.skeleton}
                    />
                    <skinnedMesh
                        name="Cientific_Hair"
                        geometry={nodes.Cientific_Hair.geometry}
                        material={materials.hair_material}
                        skeleton={nodes.Cientific_Hair.skeleton}
                    />
                    <skinnedMesh
                        name="Cientific_hands"
                        geometry={nodes.Cientific_hands.geometry}
                        material={materials.piel}
                        skeleton={nodes.Cientific_hands.skeleton}
                    />
                    <skinnedMesh
                        name="Cientific_Head"
                        geometry={nodes.Cientific_Head.geometry}
                        material={materials.piel}
                        skeleton={nodes.Cientific_Head.skeleton}
                    />
                    <skinnedMesh
                        name="Cientific_legs"
                        geometry={nodes.Cientific_legs.geometry}
                        material={materials.legs_material}
                        skeleton={nodes.Cientific_legs.skeleton}
                    />
                    <skinnedMesh
                        name="Cientific_shoes"
                        geometry={nodes.Cientific_shoes.geometry}
                        material={materials.shoes_material}
                        skeleton={nodes.Cientific_shoes.skeleton}
                    />
                    <skinnedMesh
                        name="corbatin"
                        geometry={nodes.corbatin.geometry}
                        material={materials.corbatin_material}
                        skeleton={nodes.corbatin.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </Ecctrl>
    )
}

useGLTF.preload('/assets/models/avatars/Cientific.glb');

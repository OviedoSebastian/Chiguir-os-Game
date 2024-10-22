import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import Ecctrl from "ecctrl";

export default function AvatarCientific({ vida, resetPoint, offTheMap, dentroDelMapa }) {

    const avatarAthleteRef = useRef();
    const rigidBodyavatarAthleteRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/avatars/futbolista.glb');

    const { actions } = useAnimations(animations, avatarAthleteRef);

    useEffect(() => {

        if (vida <= 0) {

            rigidBodyavatarAthleteRef.current?.setTranslation(
                {
                    x: 0,
                    y: 10,
                    z: 0,
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
            rigidBodyavatarAthleteRef.current?.setTranslation(
                {
                    x: 0,
                    y: 10,
                    z: -50,
                },
                true
            );
            dentroDelMapa();
        }
    }, [offTheMap]);

    useEffect(() => {
        setAvatar({
            ...avatar,
            avatarRef: avatarAthleteRef?.current,
            rigidBodyAvatarRef: rigidBodyavatarAthleteRef?.current

        });

    }, [avatarAthleteRef?.current, rigidBodyavatarAthleteRef?.current]);

    return (
        <Ecctrl
            ref={rigidBodyavatarAthleteRef}
            capsuleHalfHeight={0.5}
            floatingDis={0.2}
            camInitDis={-3}
            camMaxDis={-4}
            maxVelLimit={6}
            jumpVel={5}
            position={[0, 10, 0]}
        >
            <group ref={avatarAthleteRef} name="Scene" position-y={-0.745}>
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.008}>
                    <skinnedMesh
                        name="Futbolista_Body"
                        geometry={nodes.Futbolista_Body.geometry}
                        material={materials.Body_Mat}
                        skeleton={nodes.Futbolista_Body.skeleton}
                    />
                    <skinnedMesh
                        name="Futbolista_Eyes"
                        geometry={nodes.Futbolista_Eyes.geometry}
                        material={materials.eyes_material}
                        skeleton={nodes.Futbolista_Eyes.skeleton}
                    />
                    <skinnedMesh
                        name="Futbolista_Hair"
                        geometry={nodes.Futbolista_Hair.geometry}
                        material={materials.rastas_mat}
                        skeleton={nodes.Futbolista_Hair.skeleton}
                    />
                    <skinnedMesh
                        name="Futbolista_Hands"
                        geometry={nodes.Futbolista_Hands.geometry}
                        material={materials.piel}
                        skeleton={nodes.Futbolista_Hands.skeleton}
                    />
                    <skinnedMesh
                        name="Futbolista_Head"
                        geometry={nodes.Futbolista_Head.geometry}
                        material={materials.piel}
                        skeleton={nodes.Futbolista_Head.skeleton}
                    />
                    <skinnedMesh
                        name="Futbolista_Mochito"
                        geometry={nodes.Futbolista_Mochito.geometry}
                        material={materials.Mochito_mat}
                        skeleton={nodes.Futbolista_Mochito.skeleton}
                    />
                    <skinnedMesh
                        name="Futbolista_Shoes"
                        geometry={nodes.Futbolista_Shoes.geometry}
                        material={materials.Shoes_mat}
                        skeleton={nodes.Futbolista_Shoes.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </Ecctrl>
    )
}

useGLTF.preload('/assets/models/avatars/futbolista.glb');

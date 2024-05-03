import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody, vec3 } from "@react-three/rapier";
import { socket } from "../../../../socket/socket-manager";

// Se quita el metodo por url session8 para asignarle el personaje por problemas en la Geometry, se dejan comentados por si se llegan a necesitar
// export default function AvatarCientific({url}) {
// const { nodes, materials, animations } = useGLTF(url);


export default function AvatarCientific() {

    const avatarCientificRef = useRef();
    const rigidBodyAvatarCientificRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/avatars/Cientific.glb');
    const { actions } = useAnimations(animations, avatarCientificRef);
    const position = vec3();
    const [animation, setAnimation] = useState('Idle')

    useEffect(() => {
        actions[animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[animation])
                actions[animation].fadeOut(0.5);
        }

    }, [actions, animation]);

    // useEffect(()=>{
    //     setAvatar({
    //         ...avatar,
    //         avatarRef: avatarCientificRef?.current,
    //         rigidBodyAvatarRef: rigidBodyAvatarCientificRef?.current

    //     })

    // }, [avatarCientificRef?.current, rigidBodyAvatarCientificRef?.current]);


    socket.on("updates-values-transform-player", (player)=>{
        position.set(player.position.x, player.position.y, player.position.z)     
        rigidBodyAvatarCientificRef.current?.setTranslation(position, true)
    });

    socket.on("update-animation", (animation)=>{
        setAnimation(animation)
    });

    return (
        // <Ecctrl
        //     ref={rigidBodyAvatarRef}
        //     capsuleHalfHeight={0.5}
        //     floatingDis={0.2}
        //     camInitDis={-3}
        //     camMaxDis={-4}
        //     maxVelLimit={5} 
        //     jumpVel={1} 
        //     position={[12, 2, -11.5]}
        // >
        <RigidBody ref={rigidBodyAvatarCientificRef} colliders = {false} type= 'velocity' position={[10, 3, -5.5]}>
            <group ref={avatarCientificRef} name="Scene" position-y={-0.82}>
                <mesh>
                    <sphereGeometry args={[1,32,32]} />
                    <meshStandardMaterial color='blue'/>
                </mesh>
                {/* <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.002}>
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
                </group> */}
            </group>
            <CuboidCollider args={[1,1,1]} />
        </RigidBody>
    //</Ecctrl>
    )
}

import { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody, quat, vec3 } from "@react-three/rapier";
import { socket } from "../../../../socket/socket-manager";

export default function AvatarEngineer() {
    const avatarEngineerRef = useRef();
    const rigidBodyAvatarEngineerRef = useRef();
    const position = vec3();
    const rotation = quat();
    const { nodes, materials, animations } = useGLTF('/assets/models/avatars/Engineer.glb');
    const [animation, setAnimation] = useState('Dance');
    const { actions } = useAnimations(animations, avatarEngineerRef);

  

    useEffect(() => {
        if (actions && animation) {
            actions[animation]?.reset().fadeIn(0.5).play();
            return () => {
                actions[animation]?.fadeOut(0.5);
            };
        }
    }, [actions, animation]);
    
    socket.on("updates-values-transform-player", (player) =>{
        position.set( player.position.x, player.position.y, player.position.z )
        rotation.set( player.rotation.x, player.rotation.y, player.rotation.z, player.rotation.w )
        rigidBodyAvatarEngineerRef.current?.setTranslation(position, true)
        rigidBodyAvatarEngineerRef.current?.setRotation(rotation, true)
    })

    socket.on("update-animation", (animation)=>{
        if (actions[animation.animation.animation]) {
            setAnimation(animation.animation.animation);
        }
        
    })

    return (
        <RigidBody ref={rigidBodyAvatarEngineerRef} colliders={false} type="fixed" position={[ 6, 1.2, -11.5]}>
            <group ref={avatarEngineerRef} name="Scene" position-y={-0.82}>
                {/* <mesh>
                    <sphereGeometry args={[1,32,32]} />
                    <meshStandardMaterial color='blue' />
                </mesh> */}
                <group name="Armature" rotation={[Math.PI / 2, 0, 5]} scale={0.002}>
                {nodes.Engineer_eyes && (
                        <skinnedMesh
                            name="Engineer_eyes"
                            geometry={nodes.Engineer_eyes.geometry}
                            material={materials.eyes_material}
                            skeleton={nodes.Engineer_eyes.skeleton}
                        />
                    )}
                    {nodes.Engineer_foots && (
                        <skinnedMesh
                            name="Engineer_foots"
                            geometry={nodes.Engineer_foots.geometry}
                            material={materials.foot_material}
                            skeleton={nodes.Engineer_foots.skeleton}
                        />
                    )}
                    {nodes.Engineer_hands && (
                        <skinnedMesh
                            name="Engineer_hands"
                            geometry={nodes.Engineer_hands.geometry}
                            material={materials.Piel}
                            skeleton={nodes.Engineer_hands.skeleton}
                        />
                    )}
                    {nodes.Engineer_head && (
                        <skinnedMesh
                            name="Engineer_head"
                            geometry={nodes.Engineer_head.geometry}
                            material={materials.piel}
                            skeleton={nodes.Engineer_head.skeleton}
                        />
                    )}
                    {nodes.Engineer_helmet && (
                        <skinnedMesh
                            name="Engineer_helmet"
                            geometry={nodes.Engineer_helmet.geometry}
                            material={materials.helmet_material}
                            skeleton={nodes.Engineer_helmet.skeleton}
                        />
                    )}
                    {nodes.Engineer_Pants && (
                        <skinnedMesh
                            name="Engineer_Pants"
                            geometry={nodes.Engineer_Pants.geometry}
                            material={materials.pants_material}
                            skeleton={nodes.Engineer_Pants.skeleton}
                        />
                    )}
                    {nodes.Enginerr_body && (
                        <skinnedMesh
                            name="Enginerr_body"
                            geometry={nodes.Enginerr_body.geometry}
                            material={materials['body_material.001']}
                            skeleton={nodes.Enginerr_body.skeleton}
                        />
                    )}
                    {nodes.glases_body && (
                        <skinnedMesh
                            name="glases_body"
                            geometry={nodes.glases_body.geometry}
                            material={materials.glasses_material}
                            skeleton={nodes.glases_body.skeleton}
                        />
                    )}
                    {nodes.glasses_arms && (
                        <skinnedMesh
                            name="glasses_arms"
                            geometry={nodes.glasses_arms.geometry}
                            material={materials.glasses_material}
                            skeleton={nodes.glasses_arms.skeleton}
                        />
                    )}
                    {nodes.Hammer_head && (
                        <skinnedMesh
                            name="Hammer_head"
                            geometry={nodes.Hammer_head.geometry}
                            material={materials.hammer_head_m}
                            skeleton={nodes.Hammer_head.skeleton}
                        />
                    )}
                    {nodes.Hammer_stick && (
                        <skinnedMesh
                            name="Hammer_stick"
                            geometry={nodes.Hammer_stick.geometry}
                            material={materials.hammer_stick_m}
                            skeleton={nodes.Hammer_stick.skeleton}
                        />
                    )}
                    {nodes.mixamorigHips && (
                        <primitive object={nodes.mixamorigHips} />
                    )}
                    {nodes.mixamorigHips && (
                        <primitive object={nodes.mixamorigHips} />
                    )}
                </group>
            </group>
        <CuboidCollider args={[ 0.2, 0.74, 0.4 ]} />
      </RigidBody> 
    )
}
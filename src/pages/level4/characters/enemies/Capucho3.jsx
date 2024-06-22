import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function Capucho3({ position, loseLife, rotation }) {
  const capuchoRef = useRef();
  const refCapuchoRigidBody = useRef();

  const [molotovSound] = useState(new Audio("/assets/sounds/Molotov.mp3"));

  const { nodes, materials, animations } = useGLTF(
    "/assets/models/avatars/capucho.glb"
  );
  const { actions } = useAnimations(animations, capuchoRef);
  const initialPosition = position ? position[0] : 0;

  useEffect(() => {
    actions.Throw.play(); // Reproduce la animación por defecto al cargar
  }, [actions.defaultAnimation]);

  const onCollisionEnter = ({ manifold, target, other }) => {
    if (other.colliderObject.name == "character-capsule-collider") {
      molotovSound.play();
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
  };


  return (
    <RigidBody
      ref={refCapuchoRigidBody}
      type="fixed"
      colliders="cuboid"
      name="Capucho3"
      position={position}
      rotation={rotation}
      onCollisionEnter={(e) => onCollisionEnter(e)}
    >
      <group ref={capuchoRef} dispose={null} name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Capucha"
            geometry={nodes.Capucha.geometry}
            material={materials.capucha_material}
            skeleton={nodes.Capucha.skeleton}
          />
          <skinnedMesh
            name="Capucho_Body"
            geometry={nodes.Capucho_Body.geometry}
            material={materials.overalll_material}
            skeleton={nodes.Capucho_Body.skeleton}
          />
          <skinnedMesh
            name="Capucho_eyes"
            geometry={nodes.Capucho_eyes.geometry}
            material={materials.eyes_material}
            skeleton={nodes.Capucho_eyes.skeleton}
          />
          <skinnedMesh
            name="Capucho_foots"
            geometry={nodes.Capucho_foots.geometry}
            material={materials.botas_material}
            skeleton={nodes.Capucho_foots.skeleton}
          />
          <skinnedMesh
            name="Capucho_hands"
            geometry={nodes.Capucho_hands.geometry}
            material={materials.guantes_material}
            skeleton={nodes.Capucho_hands.skeleton}
          />
          <skinnedMesh
            name="Capucho_head"
            geometry={nodes.Capucho_head.geometry}
            material={materials.piel}
            skeleton={nodes.Capucho_head.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
      <CuboidCollider args={[0.5, 0.75, 0.4]}
      />
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/avatars/capucho.glb");

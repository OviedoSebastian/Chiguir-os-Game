import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Ardilla({savecheckpoint}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/villains/pericardilla.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [runSound] = useState(new Audio("/assets/sounds/jajaja.wav"));
  const refRigidBody = useRef();

  useEffect(() => {
    actions.dance.play(); // Reproduce la animación por defecto al cargar
  }, [actions.defaultAnimation]);

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      console.log("Checkpoint");
      savecheckpoint();
      runSound.play();
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
      ref={refRigidBody}
      type="fixed"
      colliders="cuboid"
      position={[44,5.5,-0.4]}
      onCollisionEnter={(e) => onCollisionEnter(e)}
      name="Ardilla"
    >
      <group ref={group} dispose={null}>
        <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 1.6]} scale={0.01}>
          <skinnedMesh
            name="pericardilla"
            geometry={nodes.pericardilla.geometry}
            material={materials.pericardillaMat}
            skeleton={nodes.pericardilla.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/villains/pericardilla.glb");
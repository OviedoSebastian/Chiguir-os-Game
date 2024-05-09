import React, { useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from '@react-three/fiber'

export default function Ardilla(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/villains/Ardilla7.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [runSound] = useState(new Audio("/assets/sounds/jajaja.wav"));
  const refRigidBody = useRef();

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      console.log("Checkpoint");
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
      onCollisionEnter={(e) => onCollisionEnter(e)}
      name="Ardilla"
    >
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Actor" rotation={[0, 3, 0]}>
            <skinnedMesh
              name="geometry_0"
              geometry={nodes.geometry_0.geometry}
              material={materials["New Material"]}
              skeleton={nodes.geometry_0.skeleton}
            />
            <primitive object={nodes.Root} />
            <primitive object={nodes.neutral_bone} />
          </group>
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/Ardilla6.glb");

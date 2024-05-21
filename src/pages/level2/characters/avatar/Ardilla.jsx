import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Ardilla({position, savecheckpoint}) {

  const ardillaRef = useRef();
  const refArdillaRigidBody = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/villains/pericardilla.glb"
  );
  const { actions } = useAnimations(animations, ardillaRef);
  const [runSound] = useState(new Audio("/assets/sounds/jajaja.wav"));

  useEffect(() => {
    actions.dance.play(); // Reproduce la animación por defecto al cargar
  }, [actions.defaultAnimation]);

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", other.colliderObject.name);

    if (other.colliderObject.name == "character-capsule-collider") {

      savecheckpoint();
      runSound.play();
      setPosition([-15, 1.28, 5]);
      console.log("Checkpoint");
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
      ref={refArdillaRigidBody}
      type="fixed"
      colliders="cuboid"
      position={position}
      onCollisionEnter={(e) => onCollisionEnter(e)}
      name="Ardilla"
    >
        <group ref={ardillaRef} dispose={null}name="Scene" position-y={-1.5}>
          <group name="Armature" rotation={[Math.PI / 2, 0, 5]} dispose={null} scale={0.01}>
            <skinnedMesh
              name="pericardilla"
              geometry={nodes.pericardilla.geometry}
              material={materials.pericardillaMat}
              skeleton={nodes.pericardilla.skeleton}
            />
            <primitive object={nodes.mixamorigHips} />
        </group>
        </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/villains/pericardilla.glb");
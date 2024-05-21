import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody, useRigidBody } from "@react-three/rapier";

export default function Curao({props, catchCurao, posicion}) {
  const { nodes, materials } = useGLTF("/assets/models/colectables/curao.glb");
  const [position, setPosition] = useState([37, -1.5, 60]);
  const [numeroDeBotellas, setNumeroDeBotellas] = useState(0);
  const refRigidBody = useRef();

  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      curaoSound.play();
      setPosition([0, 1000, 0]);
      catchCurao();
    }
  };



  const radius = 0.3;
  const speed = 5;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const angle = elapsedTime * speed;
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle) * radius;
    refRigidBody.current.rotation.y = angle;
    

    refRigidBody.current?.setTranslation(
      {
        x: position[0],
        y: position[1] + y,
        z: position[2],
      },
      true
    );
  });

  return (
    <RigidBody
      ref={refRigidBody}
      type="fixed"
      colliders="cuboid"
      onCollisionEnter={(e) => onCollisionEnter(e)}
      name="Curao"
      position={posicion}
    >
      <group {...props} dispose={null} ref={refRigidBody} rotation={[0, 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geometry_0.geometry}
        material={materials.Material_0}
      />
    </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/colectables/curao.glb");

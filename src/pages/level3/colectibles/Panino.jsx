import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Panino({
  props,
  catchPanino,
  takePanino,
}) {
  const { nodes, materials } = useGLTF(
    "/assets/models/colectables/Panino.glb"
  );
  const [position, setPosition] = useState([5, 3, 5]);
  const [visible, setVisible] = useState(true);
  const refRigidBody = useRef();

  useEffect(() => {
    if (takePanino) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [takePanino]);

  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      setVisible(false);
      curaoSound.play();
      catchPanino();
    }
  };

  const radius = 0.3;
  const speed = 5;


  return (
    <>
      {visible ? (
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="Panino"
          position={[-5, 3, -5]}
        >
          <group {...props}
            dispose={null}
            ref={refRigidBody}
            rotation={[0, 2, 0]} >
            <mesh
              geometry={nodes.PaninoPan.geometry}
              material={materials.Pan}
            />
            <mesh
              geometry={nodes.PaninoPan_1.geometry}
              material={materials.Pan2}
            />
            <mesh
              geometry={nodes.PaninoPan_2.geometry}
              material={materials.Lechuga}
            />
            <mesh
              geometry={nodes.PaninoPan_3.geometry}
              material={materials.Jamon}
            />
            <mesh
              geometry={nodes.PaninoPan_4.geometry}
              material={materials.Queso}
            />
          </group>
        </RigidBody>
      ) : null}
    </>
  );
}

useGLTF.preload("/assets/models/colectables/Panino.glb");

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody, useRigidBody } from "@react-three/rapier";

export default function Panino({
  props,
  catchCurao,
  posicion,
  positionCurao,
  curaitoCogio,
}) {
  const { nodes, materials } = useGLTF(
    "/assets/models/colectables/Panino.glb"
  );
  const [position, setPosition] = useState([5, 3, 5]);
  const [numeroDeBotellas, setNumeroDeBotellas] = useState(0);
  const [curaoBro, setCuraoBro] = useState(false);
  const [visible, setVisible] = useState(true);
  const refRigidBody = useRef();

  useEffect(() => {
    if (curaitoCogio) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [curaitoCogio]);

  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      setVisible(false);
      curaoSound.play();
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
    // refRigidBody.current.rotation.y = angle;

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
    <>
      {visible ? (
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="Curao"
          position={posicion}
        >
          <group {...props} dispose={null}>
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

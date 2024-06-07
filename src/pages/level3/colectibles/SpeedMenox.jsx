import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function SpeedMenox({ catchSpeed, takeSpeedMenox }) {

  const { nodes, materials } = useGLTF( "/assets/models/colectables/speedMenox_less.glb" );
  const [position, setPosition] = useState([1.2, 3.2, 50]);
  const [visible, setVisible] = useState(true);
  const [collisionCount, setCollisionCount] = useState(0);
  const refRigidBody = useRef();
  const radius = 0.3;
  const speed = 5;
  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));
  const lastCollisionTime = useRef(0); // Referencia para almacenar la marca de tiempo de la última colisión

  useEffect(() => {
    if (takeSpeedMenox) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [takeSpeedMenox]);

  const onCollisionEnter = ({ manifold, target, other }) => {

    if (other.colliderObject.name == "character-capsule-collider") {
      setVisible(false);
      curaoSound.play();
      catchSpeed();
    }
    
  };

  // Esta función afecta el rendimiento del nivel
  /*  useFrame(({ clock }) => {
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
  }); */

  return (
    <>
      {visible ? (
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="SpeedMenox"
          position={[20, 2, -27]}
        >
          <group dispose={null} ref={refRigidBody} >
            <mesh
              geometry={nodes.geometry_0.geometry}
              material={materials.Material_0}
              position={[-0.002, 0.56, 0.011]}
            />
          </group>
        </RigidBody>
      ) : null}
    </>
  );
}

useGLTF.preload("/assets/models/colectables/speedMenox_less.glb");

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function SpeedMenox({ catchSpeed, }) {

  const { nodes, materials } = useGLTF( "/assets/models/colectables/speedMenox_less.glb" );
  const [position, setPosition] = useState([1.2, 3.2, 50]);
  const [visible, setVisible] = useState(true);
  const [collisionCount, setCollisionCount] = useState(0);
  const refRigidBody = useRef();
  const radius = 0.3;
  const speed = 5;
  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));
  const lastCollisionTime = useRef(0); // Referencia para almacenar la marca de tiempo de la última colisión


  const onCollisionEnter = ({ manifold, target, other }) => {

    const currentTime = performance.now(); // Obtener la marca de tiempo actual
    const timeSinceLastCollision = currentTime - lastCollisionTime.current;

    if (other.colliderObject.name === "character-capsule-collider" & timeSinceLastCollision > 1000) {
      setCollisionCount((prevCount) => prevCount + 1);
      curaoSound.play();
      catchSpeed();
      
      if (collisionCount === 0) {
        console.log("Primera recoleccion");
        // Change position after the first collision
        setPosition([1, 8, -35]); // Set the new position as desired
      } else if (collisionCount >= 1) {
        // Hide after the second collision
        console.log("Segunda recoleccion");
        setVisible(false);
      }
    }
  };

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
          name="SpeedMenox"
          position={[5, 3, 5]}
        >
          <group>
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

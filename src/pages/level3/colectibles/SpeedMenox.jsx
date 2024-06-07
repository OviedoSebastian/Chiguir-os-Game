import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function SpeedMenox({ catchSpeed }) {

  const { nodes, materials } = useGLTF( "/assets/models/colectables/speedMenox_less.glb" );
  const [position, setPosition] = useState([1.2, 3.2, 50]);
  // const [position, setPosition] = useState([1.2, 3.2, 50]);
  const [visible, setVisible] = useState(true);
  const [collisionCount, setCollisionCount] = useState(0);
  const refRigidBody = useRef();
  const radius = 0.3;
  const speed = 5;
  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));
  const lastCollisionTime = useRef(0); // Referencia para almacenar la marca de tiempo de la última colisión
  const requestRef = useRef();

  const animate = () => {
    if (refRigidBody.current && visible) {
      const elapsedTime = Date.now() / 1000; // Tiempo en segundos
      const angle = elapsedTime * speed;
      const x = Math.sin(angle) * radius;
      const y = Math.cos(angle) * radius;

      refRigidBody.current.setTranslation(
        {
          x: position[0],
          y: position[1] + y,
          z: position[2],
        },
        true
      );
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [visible, position]);

  const onCollisionEnter = ({ manifold, target, other }) => {
    const currentTime = performance.now();
    const timeSinceLastCollision = currentTime - lastCollisionTime.current;

    if ( (other.colliderObject.name === "character-capsule-collider") && (timeSinceLastCollision > 1000) ) {
      lastCollisionTime.current = currentTime;
      setCollisionCount(collisionCount + 1);
      curaoSound.play();
      catchSpeed();
      
      if (collisionCount === 0) {
        console.log("Primera recoleccion");
        setPosition([1, 8, -35]);
        // Change position after the first collision
      } else if (collisionCount === 1) {
        // Hide after the second collision
        console.log("Segunda recoleccion");
        setVisible(false);
      }
    }
  };


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

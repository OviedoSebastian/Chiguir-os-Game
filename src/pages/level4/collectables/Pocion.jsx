import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Pocion({ props, catchObject }) {
  const { nodes, materials } = useGLTF("/assets/models/colectables/muestraQuimica.glb");
  const [potionSound] = useState(new Audio("/assets/sounds/Potion.wav"));
  const [position, setPosition] = useState([-5.8, 1, 25.5]);
  const [visible, setVisible] = useState(true);
  const refRigidBody = useRef();
  const requestRef = useRef();
  const radius = 0.3;
  const speed = 5;

  
  const animate = () => {
    if (refRigidBody.current && visible) {
      const elapsedTime = Date.now() / 1000; // Tiempo en segundos
      const angle = elapsedTime * speed;
      const x = Math.sin(angle) * radius;
      const y = Math.cos(angle) * radius;
      
      // Actualiza la posición y la rotación
      refRigidBody.current.setTranslation(
        {
          x: position[0],
          y: position[1] + y,
          z: position[2],
        },
        true
      );
      
      refRigidBody.current.setRotation({ x: 0, y: angle, z: 0 }, true);
    }
    requestRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [visible, position]);

  const onCollisionEnter = ({ manifold, target, other }) => {
    if (other.colliderObject.name == "character-capsule-collider") {
      // setVisible(false);
      console.log("Tomaste la Poción");
      potionSound.play();
      catchObject();
      // pendiente funcionalidades
    }
  };
  
  return (
    <RigidBody
      ref={refRigidBody}
      type="fixed"
      colliders="cuboid"
      onCollisionEnter={(e) => onCollisionEnter(e)}
      name="Pocion"
      position={position}
      >
      <group {...props} dispose={null} ref={refRigidBody}>
        <mesh
          castShadow={true}
          receiveShadow
          geometry={nodes.Muestra_1.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow={true}
          receiveShadow
          geometry={nodes.Muestra_2.geometry}
          material={materials.Liquids}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/colectables/muestraQuimica.glb");

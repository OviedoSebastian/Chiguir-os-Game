import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody, useRigidBody } from "@react-three/rapier";

export default function Radio(props) {
  const { nodes, materials } = useGLTF(
    "/assets/models/colectables/radio.glb"
  );
  const [position, setPosition] = useState([0, 0.2, 0]);
  const [numeroDeRadios, setNumeroDeRadios] = useState(0);
  const refRigidBody = useRef();

  const onCollisionEnter = ({ manifold, target, other }) => {
    console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      console.log("Chocó");
      setNumeroDeRadios(numeroDeRadios + 1);

      if (numeroDeRadios + 1 >= 5) {
        // Mover la poción a una posición inalcanzable
        setPosition([0, 1000, 0]); // Asigna una coordenada y muy alta
        if (refRigidBody.current) {
          refRigidBody.current.teleportTo({
            translation: { x: 0, y: 1000, z: 0 },
          });
        }
      } else {
        // Genera nuevas coordenadas X y Z dentro de los rangos especificados
        const newX = Math.random() * (25 + 28) - 28;
        const newZ = Math.random() * (34 + 28) - 28;
        setPosition([newX, 0.2, newZ]);
        if (refRigidBody.current) {
          refRigidBody.current.teleportTo({
            translation: { x: newX, y: 0.2, z: newZ },
          });
        }
      }
    }
  };

  return (
    <RigidBody
      ref={refRigidBody}
      type="fixed"
      colliders="cuboid"
      onCollisionEnter={(e) => onCollisionEnter(e)}
      name="Radio"
      position={position}
    >
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Radio.geometry}
          material={materials.Walkie_talkie}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/colectables/radio.glb");

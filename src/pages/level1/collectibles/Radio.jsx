import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody, useRigidBody } from "@react-three/rapier";

export default function Radio({props, catchRadio}) {

  const [runSound] = useState(new Audio("/assets/sounds/recolect_object1.wav"))

  const { nodes, materials } = useGLTF(
    "/assets/models/colectables/radio.glb"
  );
  const [position, setPosition] = useState([0, -1, 0]);
  const [numeroDeRadios, setNumeroDeRadios] = useState(0);
  const refRigidBody = useRef();

  const onCollisionEnter = ({ manifold, target, other }) => {
    console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      console.log("Chocó");
      runSound.play();
      setNumeroDeRadios(numeroDeRadios + 1);
      catchRadio()
      if (numeroDeRadios + 1 >= 5) {
        // Mover la poción a una posición inalcanzable
        setPosition([0, 1000, 0]); // Asigna una coordenada y muy alta
        if (refRigidBody.current) {
          refRigidBody.current.teleportTo({
            translation: { x: 0, y: 1000, z: 0 },
          })
          ;
        }
      } else {
        // Genera nuevas coordenadas X y Z dentro de los rangos especificados
        const newX = Math.random() * (25 + 28) - 28;
        const newZ = Math.random() * (34 + 28) - 28;
        setPosition([newX, -1, newZ]);
        if (refRigidBody.current) {
          refRigidBody.current.teleportTo({
            translation: { x: newX, y: -1, z: newZ },
          });
        }
      }
    }
  };

  const radius = 0.1;
  const speed = 5;

  // refRigidBody.current.rotation.y = Math.cos(clock.getElapsedTime());

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const angle = elapsedTime * speed;
    const x = Math.cos(angle) * radius;
    refRigidBody.current.rotation.y = Math.cos(elapsedTime);

    refRigidBody.current?.setTranslation(
      {
        x: position[0],
        y: position[1] + x,
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

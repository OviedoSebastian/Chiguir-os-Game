import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function Portero({ position, changeSpeed }) {

  const porteroRef = useRef();
  const refPorteroRigidBody = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/avatars/Portero.glb"
  );
  const { actions } = useAnimations(animations, porteroRef);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const maxDistance = 1.5; // Maximum distance to move left and right
  const initialPosition = position ? position[0] : 0;
  const [speedPortero, setSpeedPortero] = useState(0.2) // Adjust the speedPortero as needed

  useEffect(() => {
    if (changeSpeed === 1){
      setSpeedPortero(0.1)
    }else if(changeSpeed === 2){
      setSpeedPortero(0.001)
    }
  },[changeSpeed])


  useEffect(() => {
    actions.Idle.play(); // Reproduce la animación por defecto al cargar
  }, [actions.defaultAnimation]);

  useFrame(() => {
    if (refPorteroRigidBody.current) {
      // Get current position
      const currentPosition = refPorteroRigidBody.current.translation();
      
      // Calculate new position
      let newPositionX = currentPosition.x + direction * speedPortero;

      // Check boundaries and reverse direction if necessary
      if (newPositionX > initialPosition + maxDistance || newPositionX < initialPosition - maxDistance) {
        setDirection(-direction);
        newPositionX = currentPosition.x + direction * speedPortero; // Apply the reverse direction
      }

      // Update the position of the rigid body
      refPorteroRigidBody.current.setTranslation({ 
        x: newPositionX, 
        y: currentPosition.y, 
        z: currentPosition.z 
      }, true);
    }
  });

  return (
    <RigidBody
      ref={refPorteroRigidBody}
      type="fixed"
      colliders={false}
      name="portero"
    >
        <group ref={porteroRef} dispose={null}name="Scene" position={[0.5, 1.3, 36.2]}>
          <group name="Armature" rotation={[Math.PI / 2, 0, Math.PI]} dispose={null} scale={0.008}>
          <skinnedMesh
            name="Gloves"
            geometry={nodes.Gloves.geometry}
            material={materials.Gloes_mat}
            skeleton={nodes.Gloves.skeleton}
          />
          <skinnedMesh
            name="Portero_Body"
            geometry={nodes.Portero_Body.geometry}
            material={materials.Camiseta_mat}
            skeleton={nodes.Portero_Body.skeleton}
          />
          <skinnedMesh
            name="Portero_Eyes"
            geometry={nodes.Portero_Eyes.geometry}
            material={materials['eyes_material.001']}
            skeleton={nodes.Portero_Eyes.skeleton}
          />
          <skinnedMesh
            name="Portero_Hair"
            geometry={nodes.Portero_Hair.geometry}
            material={materials['Hair_mat.001']}
            skeleton={nodes.Portero_Hair.skeleton}
          />
          <skinnedMesh
            name="Portero_Head"
            geometry={nodes.Portero_Head.geometry}
            material={materials['piel.001']}
            skeleton={nodes.Portero_Head.skeleton}
          />
          <skinnedMesh
            name="Portero_Mochito"
            geometry={nodes.Portero_Mochito.geometry}
            material={materials.Mochito_mat}
            skeleton={nodes.Portero_Mochito.skeleton}
          />
          <skinnedMesh
            name="Portero_Shoes"
            geometry={nodes.Portero_Shoes.geometry}
            material={materials.Shoes_mat}
            skeleton={nodes.Portero_Shoes.skeleton}
          />
            <primitive object={nodes.mixamorigHips} />
        </group>
        </group>
        <CuboidCollider
            args={[0.5, 0.75, 0.4]}  // Ajusta el tamaño del cuboide
            position={position}  // Ajusta la posición del cuboide en relación al modelo
            restitution={0}  // Ajusta las propiedades físicas como la restitución (rebote)
            friction={1}  // Ajusta la fricción
      />
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/avatars/Portero.glb");
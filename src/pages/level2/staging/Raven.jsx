import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from '@react-three/fiber'

export default function Raven({}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/extras/untitled.glb"
  );
  const { actions } = useAnimations(animations, group);
  const refRigidBody = useRef();

  useEffect(() => {
    actions.fly.play(); // Reproduce la animación por defecto al cargar
  }, [actions.defaultAnimation]);



  return (
      <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="rig" rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <skinnedMesh
            name="Bird"
            geometry={nodes.Bird.geometry}
            material={materials.blinn3SG}
            skeleton={nodes.Bird.skeleton}
          />
          <primitive object={nodes.body} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/extras/Raven.glb");
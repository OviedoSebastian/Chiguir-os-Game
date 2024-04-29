import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/Bosque.glb");

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOSQUE_1.geometry}
          material={materials.Piso}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOSQUE_2.geometry}
          material={materials.HojaOscura}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOSQUE_3.geometry}
          material={materials.HojaClara}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOSQUE_4.geometry}
          material={materials.Tronco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOSQUE_5.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOSQUE_6.geometry}
          material={materials.TroncoP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOSQUE_7.geometry}
          material={materials.Muro}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/world/Bosque.glb");

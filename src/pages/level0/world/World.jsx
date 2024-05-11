import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/level0.glb");

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mapa.geometry}
          material={materials.mapa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.checkpoint.geometry}
          material={materials.checkpoint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.teclas.geometry}
          material={materials.teclas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CartelMapa.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CartelArdilla.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cartel4.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cartel5.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cartel6.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cartel7.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CartelControles.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_1_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/world/level0.glb");

import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/canchav9.glb");

  return (
    <RigidBody type="fixed" colliders={false}>
      <group {...props} dispose={null}>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh  receiveShadow={true} geometry={nodes.Camino.geometry} material={materials.TierraG} />
          <mesh  receiveShadow={true} geometry={nodes.Cesped.geometry} material={materials.Pasto} />
          <mesh geometry={nodes.Arenero.geometry} material={materials.Tierra} />
          <mesh geometry={nodes.Pintura.geometry} material={materials.white} />
          <mesh geometry={nodes.Arcos.geometry} material={materials.arco} />
          <mesh geometry={nodes.Roca1.geometry} material={materials.roca1} />
          <mesh geometry={nodes.Roca2.geometry} material={materials.roca2} />
          <mesh geometry={nodes.Roca3.geometry} material={materials.roca2} />
          <mesh receiveShadow={true}
            geometry={nodes.Pasto1.geometry}
            material={materials.PastoPiso}
          />
          <mesh receiveShadow={true}
            geometry={nodes.CANCHITA_DE_FULBOL004.geometry}
            material={materials.cancha}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL007.geometry}
            material={materials.hojas3}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL007_1.geometry}
            material={materials.Union364Mtl}
          />
          <mesh receiveShadow={true}
            geometry={nodes.CANCHITA_DE_FULBOL007_2.geometry}
            material={materials.sand}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL003_1.geometry}
            material={materials.graderias1}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL003_2.geometry}
            material={materials.barandas}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_1.geometry}
            material={materials["hojas1.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_2.geometry}
            material={materials["tronco1.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_3.geometry}
            material={materials["tronco2.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_4.geometry}
            material={materials["arbustos.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_5.geometry}
            material={materials["hojas3.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_6.geometry}
            material={materials["tronco3.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_7.geometry}
            material={materials["hojas4.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_8.geometry}
            material={materials["tronco4.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL004_9.geometry}
            material={materials["hojas5.001"]}
          />
          <mesh receiveShadow={true}
            geometry={nodes.CANCHITA_DE_FULBOL006.geometry}
            material={materials.cancha}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL006_1.geometry}
            material={materials["tronco1.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL006_2.geometry}
            material={materials["arbustos.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL006_3.geometry}
            material={materials["hojas4.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL006_4.geometry}
            material={materials["tronco4.001"]}
          />
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL006_5.geometry}
            material={materials["hojas5.001"]}
          />
          <mesh geometry={nodes.Mesh.geometry} material={materials.Hojas1} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials.Tronco2} />
          <mesh
            geometry={nodes.Cylinder090.geometry}
            material={materials.roca1}
          />
          <mesh
            geometry={nodes.Cylinder090_1.geometry}
            material={materials.roca2}
          />
          <mesh geometry={nodes.Cube.geometry} material={materials.tierra2} />
          <mesh geometry={nodes.Cube_1.geometry} material={materials.cespedI} />
          <mesh
            geometry={nodes.Cube023.geometry}
            material={materials.tierra2}
          />
          <mesh
            geometry={nodes.Cube023_1.geometry}
            material={materials.cespedI}
          />
          <mesh
            geometry={nodes.Cube024.geometry}
            material={materials.tierra2}
          />
          <mesh
            geometry={nodes.Cube024_1.geometry}
            material={materials.cespedI}
          />
          <mesh
            geometry={nodes.Cube026.geometry}
            material={materials.tierra2}
          />
          <mesh
            geometry={nodes.Cube026_1.geometry}
            material={materials.cespedI}
          />
          <mesh
            geometry={nodes.Cube027.geometry}
            material={materials.tierra2}
          />
          <mesh
            geometry={nodes.Cube027_1.geometry}
            material={materials.cespedI}
          />
          <mesh
            geometry={nodes.Cube028.geometry}
            material={materials.tierra2}
          />
          <mesh
            geometry={nodes.Cube028_1.geometry}
            material={materials.cespedI}
          />
          <mesh
            geometry={nodes.Cube029.geometry}
            material={materials.tierra2}
          />
          <mesh
            geometry={nodes.Cube029_1.geometry}
            material={materials.cespedI}
          />
          <mesh
            geometry={nodes.Cube031.geometry}
            material={materials.tronco2}
          />
          <mesh
            geometry={nodes.Cube031_1.geometry}
            material={materials["hojas1.001"]}
          />
          <mesh
            geometry={nodes.Cube031_2.geometry}
            material={materials["hojas5.001"]}
          />
          <mesh geometry={nodes.Cylinder.geometry} material={materials.oro} />
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.base}
          />
          <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials.estrella}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.CANCHITA_DE_FULBOL003.geometry}
            material={materials.escaleras1}
          />
        </RigidBody>
      </group>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          geometry={nodes.Cylinder025.geometry}
          material={materials.champi1}
        />
        <mesh
          geometry={nodes.Cylinder025_1.geometry}
          material={materials.champi2}
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials.champiBlanco}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.champiCafe}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.champiRojo}
        />
        <mesh
          geometry={nodes.Cylinder082.geometry}
          material={materials.champi1}
        />
        <mesh
          geometry={nodes.Cylinder082_1.geometry}
          material={materials.champi2}
        />
        <mesh
          geometry={nodes.Cylinder095.geometry}
          material={materials.champiBlanco}
        />
        <mesh
          geometry={nodes.Cylinder095_1.geometry}
          material={materials.champiRojo}
        />
        <mesh
          geometry={nodes.Cylinder095_2.geometry}
          material={materials.champiCafe}
        />
      </RigidBody>
      <RigidBody type="dynamic" colliders="ball" restitution={1}>
        <mesh geometry={nodes.Balon.geometry} material={materials.Pelota} />
      </RigidBody>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/world/canchav9.glb");

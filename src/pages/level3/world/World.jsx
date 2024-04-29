import { useGLTF, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {

    const {nodes, materials} = useGLTF("/assets/models/world/Cancha8.glb");

    
    return (
      <RigidBody type="fixed" colliders="trimesh">
        <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camino.geometry}
          material={materials.Part280Mtl}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cesped.geometry} material={materials.cancha} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arbustos.geometry}
          material={materials.arbustos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arenero.geometry}
          material={materials.Tierra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL.geometry}
          material={materials.cancha}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_1.geometry}
          material={materials.hojas1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_2.geometry}
          material={materials.tronco1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_3.geometry}
          material={materials.tronco2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_4.geometry}
          material={materials.arbustos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_5.geometry}
          material={materials.Part211Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_6.geometry}
          material={materials.hojas3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_7.geometry}
          material={materials.tronco3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_8.geometry}
          material={materials.Part223Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_9.geometry}
          material={materials.Part280Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_10.geometry}
          material={materials.hojas4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_11.geometry}
          material={materials.tronco4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_12.geometry}
          material={materials.hojas5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_13.geometry}
          material={materials['Frame1Mtl.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL_14.geometry}
          material={materials.Part612Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL007.geometry}
          material={materials.hojas3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL007_1.geometry}
          material={materials.Union364Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCHITA_DE_FULBOL007_2.geometry}
          material={materials.sand}
        />
      </group>
      </RigidBody>
      
    )
    
}

useGLTF.preload("/assets/models/world/Cancha8.glb");
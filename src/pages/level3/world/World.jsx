import { useGLTF, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {

    const {nodes, materials} = useGLTF("/assets/models/world/ColiseoSinAsientos.glb");

    
    return (
      <RigidBody type="fixed" colliders="trimesh">
            <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ParedesAfuera.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Piso.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PisoColiseo.geometry}
            material={materials.cancha}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Canchas.geometry}
            material={materials['WHITE.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_1.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_2.geometry}
            material={materials['MaterialEscaleras.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_3.geometry}
            material={nodes.Coliseo_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_4.geometry}
            material={materials.Entrada1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_5.geometry}
            material={materials['MaterialBarandilla.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_6.geometry}
            material={materials['BarandilaMaterial.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_7.geometry}
            material={materials.Escaleritas2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo_8.geometry}
            material={materials['header-univalle1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo006.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo006_1.geometry}
            material={nodes.Coliseo006_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo006_2.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo006_3.geometry}
            material={materials.TarimaColiseo1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo006_4.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo008.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo008_1.geometry}
            material={nodes.Coliseo008_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo008_2.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coliseo008_3.geometry}
            material={materials['Material.002']}
          />
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sillas.geometry}
            material={materials['sillas']}
          /> */}
        </group>
    </RigidBody>

    )
    
}

useGLTF.preload("/assets/models/world/ColiseoSinAsientos.glb");
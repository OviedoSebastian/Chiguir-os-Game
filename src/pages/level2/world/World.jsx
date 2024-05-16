import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/Bosquev6.glb");

  return (
    <RigidBody type="fixed" colliders={false}>
      <group {...props} dispose={null}>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Isla001.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Isla2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Isla3.geometry}
            material={materials["Material.001"]}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fuego.geometry}
            material={materials["Material.015"]}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tronco010.geometry}
            material={materials.Brown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Landscape.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Landscape_1.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Landscape_2.geometry}
            material={materials.Green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Landscape_3.geometry}
            material={materials.tierra}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials["Green.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.CafeClaro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_2.geometry}
            material={materials.VerdeO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_3.geometry}
            material={materials.VerdeOs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_4.geometry}
            material={materials.Cafeclaro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_5.geometry}
            material={materials["Green 2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials.Brown3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials.Gray2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_2.geometry}
            material={materials.Yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials["Gray 2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials["Gray 3"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials["Red 4"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_3.geometry}
            material={materials["Light Brown"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_4.geometry}
            material={materials["Dark Brown"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane148.geometry}
            material={materials["Entrace.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane148_1.geometry}
            material={materials["Stone.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.oro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.estrella}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wood_1_texrture_atlas_0.geometry}
            material={materials.Brown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wood_1_texrture_atlas_0_1.geometry}
            material={materials.Brown3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Firewood_3_texrture_atlas_0.geometry}
            material={materials.Brown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Firewood_3_texrture_atlas_0_1.geometry}
            material={materials.Brown3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wood_1001_texrture_atlas_0.geometry}
            material={materials.Brown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wood_1001_texrture_atlas_0_1.geometry}
            material={materials.Brown3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002_1.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002_2.geometry}
            material={materials.Green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002_3.geometry}
            material={materials.tierra}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LagoCollider.geometry}
            material={materials.Blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Palo1001.geometry}
            material={materials["Antorcha.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Palo2001.geometry}
            material={materials["Antorcha.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Palo1.geometry}
            material={materials.Antorcha}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Palo2.geometry}
            material={materials.Antorcha}
          />
        </RigidBody>
      </group>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh geometry={nodes.LotoC023.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC022.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC020.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC019.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC018.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC014.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC012.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC011.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC010.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC009.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC008.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC007.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC006.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC005.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC004.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC003.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC002.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC001.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoC.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA036.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA035.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA034.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA032.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA031.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA029.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA028.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA027.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA026.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA025.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA021.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA018.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA017.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA016.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA015.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA014.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA012.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA011.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA010.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA009.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA008.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA007.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA006.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA005.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA004.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA003.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA002.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA001.geometry} material={materials.Loto} />
        <mesh geometry={nodes.LotoA.geometry} material={materials.Loto} />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Barco.geometry}
          material={materials["Texture-base.014"]}
        />
      </RigidBody>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lago.geometry}
        material={materials.Blue}
      />
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/world/Bosquev6.glb");

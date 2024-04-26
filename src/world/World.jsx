import { useGLTF, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {

    const {nodes, materials} = useGLTF("/assets/models/world/Plazoleta.glb");

    
    return (
      <RigidBody type="fixed" colliders="cuboid">
          <group {...props} dispose={null}>
        <group>
          <mesh geometry={nodes.camino1.geometry} material={materials.Cesped} />
          <group>
            <mesh geometry={nodes.fence004.geometry} material={materials.fence4} />
            <mesh geometry={nodes.fence004_1.geometry} material={materials.fence3} />
            <mesh geometry={nodes.fence004_2.geometry} material={materials.fence2} />
            <mesh geometry={nodes.fence004_3.geometry} material={materials.fence1} />
          </group>
          <group>
            <mesh geometry={nodes.map_10osm_buildings009.geometry} material={materials['wall.004']} />
            <mesh
              geometry={nodes.map_10osm_buildings009_1.geometry}
              material={materials.mat_window_panes}
            />
            <mesh
              geometry={nodes.map_10osm_buildings009_2.geometry}
              material={materials.mat_window_louvers}
            />
            <mesh
              geometry={nodes.map_10osm_buildings009_3.geometry}
              material={materials['wall.002']}
            />
            <mesh
              geometry={nodes.map_10osm_buildings009_4.geometry}
              material={materials['mat_railing_posts.Salones']}
            />
            <mesh
              geometry={nodes.map_10osm_buildings009_5.geometry}
              material={materials.mat_railing_rails}
            />
            <mesh geometry={nodes.map_10osm_buildings009_6.geometry} material={materials.Glass} />
            <mesh geometry={nodes.map_10osm_buildings009_7.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.map_8osm_buildings019.geometry} material={materials.floor} />
            <mesh
              geometry={nodes.map_8osm_buildings019_1.geometry}
              material={materials['wall.002']}
            />
            <mesh geometry={nodes.map_8osm_buildings019_2.geometry} material={materials.mat_stairs} />
            <mesh
              geometry={nodes.map_8osm_buildings019_3.geometry}
              material={materials.mat_railing_posts}
            />
            <mesh geometry={nodes.map_8osm_buildings019_4.geometry} material={materials.Glass} />
            <mesh
              geometry={nodes.map_8osm_buildings019_5.geometry}
              material={materials['mat_railing_rails.Auditorios.001']}
            />
            <mesh geometry={nodes.map_8osm_buildings019_6.geometry} material={materials.negro} />
          </group>
          <mesh geometry={nodes.Escalera.geometry} material={materials.escalerasPlaza} />
          <group>
            <mesh geometry={nodes.maposm_buildings002.geometry} material={materials['wall.003']} />
            <mesh geometry={nodes.maposm_buildings002_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.maposm_buildings002_2.geometry} material={materials.marcoVentana} />
            <mesh
              geometry={nodes.maposm_buildings002_3.geometry}
              material={materials.rejillaVentana}
            />
            <mesh
              geometry={nodes.maposm_buildings002_4.geometry}
              material={materials['mat_railing_posts.Edificio']}
            />
            <mesh
              geometry={nodes.maposm_buildings002_5.geometry}
              material={materials['mat_railing_rails.Edificio']}
            />
            <mesh
              geometry={nodes.maposm_buildings002_6.geometry}
              material={materials.mat_railing_walls}
            />
            <mesh geometry={nodes.maposm_buildings002_7.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_025_mesh.geometry} material={materials.mat_walls} />
            <mesh geometry={nodes.building_025_mesh_1.geometry} material={materials.mat_columns} />
            <mesh geometry={nodes.building_025_mesh_2.geometry} material={materials.Material} />
          </group>
          <mesh geometry={nodes.CentroPlaza.geometry} material={materials.escalerasPlaza} />
          <mesh geometry={nodes.univalle_logo.geometry} material={materials['univalle logo']} />
          <mesh geometry={nodes.Piso.geometry} material={materials.Piso} />
          <mesh geometry={nodes.TechoAudi.geometry} material={materials.roof} />
          <mesh geometry={nodes.TechoSalon.geometry} material={materials.roof} />
          <mesh geometry={nodes.TechoEdificio.geometry} material={materials.roof} />
          <mesh geometry={nodes.TechoCR.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Banca.geometry} material={materials.Bancas} />
          <group>
            <mesh geometry={nodes.Mesh.geometry} material={materials.hojas5} />
            <mesh geometry={nodes.Mesh_1.geometry} material={materials.tronco3} />
          </group>
          <group>
            <mesh geometry={nodes.Cube041.geometry} material={materials.tronco2} />
            <mesh geometry={nodes.Cube041_1.geometry} material={materials.hojas3} />
            <mesh geometry={nodes.Cube041_2.geometry} material={materials.hojas4} />
          </group>
          <mesh geometry={nodes.Arbusto1.geometry} material={materials.Bush} />
          <mesh geometry={nodes.Arbusto2.geometry} material={materials.Bush} />
          <mesh geometry={nodes.Arbusto3.geometry} material={materials.Bush} />
          <mesh geometry={nodes.Arbusto4.geometry} material={materials.Bush} />
          <group>
            <mesh geometry={nodes.Cube031.geometry} material={materials.tronco4} />
            <mesh geometry={nodes.Cube031_1.geometry} material={materials.hojas6} />
            <mesh geometry={nodes.Cube031_2.geometry} material={materials.hojas7} />
          </group>
          <mesh geometry={nodes.cesped1.geometry} material={materials.Cesped1} />
          <group>
            <mesh geometry={nodes.Cylinder033.geometry} material={materials.piedra1} />
            <mesh geometry={nodes.Cylinder033_1.geometry} material={materials.piedra2} />
          </group>
          <mesh geometry={nodes.Roca2.geometry} material={materials.roca1} />
          <group>
            <mesh geometry={nodes.building_040_mesh.geometry} material={materials.edificio6} />
            <mesh geometry={nodes.building_040_mesh_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_040_mesh_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_040_mesh_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_040_mesh_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_040_mesh_5.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_040_mesh_6.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_040_mesh_7.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_041_mesh.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_041_mesh_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_041_mesh_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_041_mesh_3.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_041_mesh_4.geometry} material={materials.edificio5} />
          </group>
          <group>
            <mesh geometry={nodes.building_043_mesh.geometry} material={materials.wallsEdificio3} />
            <mesh geometry={nodes.building_043_mesh_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh_7.geometry} material={materials.louvresE} />
          </group>
          <group>
            <mesh geometry={nodes.building_044_mesh.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_044_mesh_1.geometry} material={materials.edificio2} />
            <mesh geometry={nodes.building_044_mesh_2.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_044_mesh_3.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_044_mesh_4.geometry} material={materials.gris} />
          </group>
          <group>
            <mesh geometry={nodes.building_045_mesh.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.building_045_mesh_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_045_mesh_2.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_045_mesh_3.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_045_mesh_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_045_mesh_5.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_045_mesh_6.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_042_mesh001.geometry} material={materials['wall.010']} />
            <mesh geometry={nodes.building_042_mesh001_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_042_mesh001_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_042_mesh001_3.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_042_mesh001_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_042_mesh001_5.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_040_mesh002.geometry} material={materials.edificio6} />
            <mesh geometry={nodes.building_040_mesh002_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_040_mesh002_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_040_mesh002_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_040_mesh002_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_040_mesh002_5.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_040_mesh002_6.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_040_mesh002_7.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_040_mesh002_8.geometry} material={materials.edificio6v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_041_mesh002.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_041_mesh002_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_041_mesh002_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_041_mesh002_3.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_041_mesh002_4.geometry} material={materials.edificio5v2} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_043_mesh002.geometry}
              material={materials.wallsEdificio3}
            />
            <mesh geometry={nodes.building_043_mesh002_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh002_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh002_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh002_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh002_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh002_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh002_7.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_043_mesh002_8.geometry} material={materials.edificio3v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_044_mesh002.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_044_mesh002_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_044_mesh002_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_044_mesh002_3.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_044_mesh002_4.geometry} material={materials.edificio2v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_045_mesh002.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_045_mesh002_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_045_mesh002_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_045_mesh002_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_045_mesh002_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_045_mesh002_5.geometry} material={materials.negro} />
            <mesh
              geometry={nodes.building_045_mesh002_6.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group>
            <mesh geometry={nodes.building_042_mesh002.geometry} material={materials['wall.010']} />
            <mesh geometry={nodes.building_042_mesh002_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_042_mesh002_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_042_mesh002_3.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_042_mesh002_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_042_mesh002_5.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_042_mesh002_6.geometry} material={materials.edificio4v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_040_mesh003.geometry} material={materials.edificio6} />
            <mesh geometry={nodes.building_040_mesh003_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_040_mesh003_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_040_mesh003_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_040_mesh003_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_040_mesh003_5.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_040_mesh003_6.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_040_mesh003_7.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_041_mesh003.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_041_mesh003_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_041_mesh003_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_041_mesh003_3.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_041_mesh003_4.geometry} material={materials.edificio5} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_043_mesh003.geometry}
              material={materials.wallsEdificio3}
            />
            <mesh geometry={nodes.building_043_mesh003_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh003_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh003_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh003_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh003_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh003_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh003_7.geometry} material={materials.louvresE} />
          </group>
          <group>
            <mesh geometry={nodes.building_044_mesh003.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_044_mesh003_1.geometry} material={materials.edificio2} />
            <mesh geometry={nodes.building_044_mesh003_2.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_044_mesh003_3.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_044_mesh003_4.geometry} material={materials.gris} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_045_mesh003.geometry}
              material={materials['Material.005']}
            />
            <mesh geometry={nodes.building_045_mesh003_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_045_mesh003_2.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_045_mesh003_3.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_045_mesh003_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_045_mesh003_5.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_045_mesh003_6.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_042_mesh003.geometry} material={materials['wall.010']} />
            <mesh geometry={nodes.building_042_mesh003_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_042_mesh003_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_042_mesh003_3.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_042_mesh003_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_042_mesh003_5.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_040_mesh004.geometry} material={materials.edificio6} />
            <mesh geometry={nodes.building_040_mesh004_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_040_mesh004_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_040_mesh004_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_040_mesh004_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_040_mesh004_5.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_040_mesh004_6.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_040_mesh004_7.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_040_mesh004_8.geometry} material={materials.edificio6v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_041_mesh004.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_041_mesh004_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_041_mesh004_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_041_mesh004_3.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_041_mesh004_4.geometry} material={materials.edificio5v2} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_043_mesh004.geometry}
              material={materials.wallsEdificio3}
            />
            <mesh geometry={nodes.building_043_mesh004_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh004_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh004_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh004_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh004_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh004_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh004_7.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_043_mesh004_8.geometry} material={materials.edificio3v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_044_mesh004.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_044_mesh004_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_044_mesh004_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_044_mesh004_3.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_044_mesh004_4.geometry} material={materials.edificio2v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_045_mesh004.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_045_mesh004_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_045_mesh004_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_045_mesh004_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_045_mesh004_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_045_mesh004_5.geometry} material={materials.negro} />
            <mesh
              geometry={nodes.building_045_mesh004_6.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group>
            <mesh geometry={nodes.building_042_mesh004.geometry} material={materials['wall.010']} />
            <mesh geometry={nodes.building_042_mesh004_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_042_mesh004_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_042_mesh004_3.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_042_mesh004_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_042_mesh004_5.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_042_mesh004_6.geometry} material={materials.edificio4v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_040_mesh005.geometry} material={materials.edificio6} />
            <mesh geometry={nodes.building_040_mesh005_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_040_mesh005_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_040_mesh005_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_040_mesh005_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_040_mesh005_5.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_040_mesh005_6.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_040_mesh005_7.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_041_mesh005.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_041_mesh005_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_041_mesh005_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_041_mesh005_3.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_041_mesh005_4.geometry} material={materials.edificio5} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_043_mesh005.geometry}
              material={materials.wallsEdificio3}
            />
            <mesh geometry={nodes.building_043_mesh005_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh005_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh005_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh005_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh005_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh005_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh005_7.geometry} material={materials.louvresE} />
          </group>
          <group>
            <mesh geometry={nodes.building_044_mesh005.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_044_mesh005_1.geometry} material={materials.edificio2} />
            <mesh geometry={nodes.building_044_mesh005_2.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_044_mesh005_3.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_044_mesh005_4.geometry} material={materials.gris} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_045_mesh005.geometry}
              material={materials['Material.005']}
            />
            <mesh geometry={nodes.building_045_mesh005_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_045_mesh005_2.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_045_mesh005_3.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_045_mesh005_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_045_mesh005_5.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_045_mesh005_6.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_042_mesh005.geometry} material={materials['wall.010']} />
            <mesh geometry={nodes.building_042_mesh005_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_042_mesh005_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_042_mesh005_3.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_042_mesh005_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_042_mesh005_5.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_043_mesh006.geometry}
              material={materials.wallsEdificio3}
            />
            <mesh geometry={nodes.building_043_mesh006_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh006_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh006_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh006_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh006_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh006_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh006_7.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_043_mesh006_8.geometry} material={materials.edificio3v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_044_mesh006.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_044_mesh006_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_044_mesh006_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_044_mesh006_3.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_044_mesh006_4.geometry} material={materials.edificio2v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_045_mesh006.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_045_mesh006_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_045_mesh006_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_045_mesh006_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_045_mesh006_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_045_mesh006_5.geometry} material={materials.negro} />
            <mesh
              geometry={nodes.building_045_mesh006_6.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group>
            <mesh geometry={nodes.building_040_mesh007.geometry} material={materials.edificio6} />
            <mesh geometry={nodes.building_040_mesh007_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_040_mesh007_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_040_mesh007_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_040_mesh007_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_040_mesh007_5.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_040_mesh007_6.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_040_mesh007_7.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_041_mesh007.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_041_mesh007_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_041_mesh007_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_041_mesh007_3.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_041_mesh007_4.geometry} material={materials.edificio5} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_043_mesh007.geometry}
              material={materials.wallsEdificio3}
            />
            <mesh geometry={nodes.building_043_mesh007_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh007_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh007_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh007_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh007_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh007_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh007_7.geometry} material={materials.louvresE} />
          </group>
          <group>
            <mesh geometry={nodes.building_042_mesh007.geometry} material={materials['wall.010']} />
            <mesh geometry={nodes.building_042_mesh007_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_042_mesh007_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_042_mesh007_3.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_042_mesh007_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_042_mesh007_5.geometry} material={materials.negro} />
          </group>
          <group>
            <mesh geometry={nodes.building_040_mesh008.geometry} material={materials.edificio6} />
            <mesh geometry={nodes.building_040_mesh008_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_040_mesh008_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_040_mesh008_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_040_mesh008_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_040_mesh008_5.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_040_mesh008_6.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_040_mesh008_7.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_040_mesh008_8.geometry} material={materials.edificio6v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_041_mesh008.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_041_mesh008_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_041_mesh008_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_041_mesh008_3.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_041_mesh008_4.geometry} material={materials.edificio5v2} />
          </group>
          <group>
            <mesh
              geometry={nodes.building_043_mesh008.geometry}
              material={materials.wallsEdificio3}
            />
            <mesh geometry={nodes.building_043_mesh008_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_043_mesh008_2.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_043_mesh008_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_043_mesh008_4.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_043_mesh008_5.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_043_mesh008_6.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_043_mesh008_7.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_043_mesh008_8.geometry} material={materials.edificio3v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_044_mesh008.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_044_mesh008_1.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_044_mesh008_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_044_mesh008_3.geometry} material={materials.gris} />
            <mesh geometry={nodes.building_044_mesh008_4.geometry} material={materials.edificio2v2} />
          </group>
          <group>
            <mesh geometry={nodes.building_045_mesh008.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_045_mesh008_1.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_045_mesh008_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_045_mesh008_3.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_045_mesh008_4.geometry} material={materials.louvresE} />
            <mesh geometry={nodes.building_045_mesh008_5.geometry} material={materials.negro} />
            <mesh
              geometry={nodes.building_045_mesh008_6.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group>
            <mesh geometry={nodes.building_042_mesh008.geometry} material={materials['wall.010']} />
            <mesh geometry={nodes.building_042_mesh008_1.geometry} material={materials.Glass} />
            <mesh geometry={nodes.building_042_mesh008_2.geometry} material={materials.techoE} />
            <mesh geometry={nodes.building_042_mesh008_3.geometry} material={materials.puertaE} />
            <mesh geometry={nodes.building_042_mesh008_4.geometry} material={materials.rendijasE} />
            <mesh geometry={nodes.building_042_mesh008_5.geometry} material={materials.negro} />
            <mesh geometry={nodes.building_042_mesh008_6.geometry} material={materials.edificio4v2} />
          </group>
          <group>
            <mesh geometry={nodes.Mesh001.geometry} material={materials.hojas} />
            <mesh geometry={nodes.Mesh001_1.geometry} material={materials.tronco} />
          </group>
          <group>
            <mesh geometry={nodes.Cube030.geometry} material={materials['tronco.001']} />
            <mesh geometry={nodes.Cube030_1.geometry} material={materials.hojas1} />
            <mesh geometry={nodes.Cube030_2.geometry} material={materials.hojas2} />
          </group>
          <group>
            <mesh geometry={nodes.Mesh002.geometry} material={materials.hojas} />
            <mesh geometry={nodes.Mesh002_1.geometry} material={materials.tronco} />
          </group>
          <group>
            <mesh geometry={nodes.Cylinder005.geometry} material={materials.herbes} />
            <mesh geometry={nodes.Cylinder005_1.geometry} material={materials['roso feauille']} />
          </group>
          <mesh geometry={nodes.cesped2.geometry} material={materials['Material.007']} />
          <group>
            <mesh geometry={nodes.Cylinder001.geometry} material={materials['champi gris']} />
            <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['champi marron ']} />
            <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['champi blanco']} />
            <mesh geometry={nodes.Cylinder001_3.geometry} material={materials['champi rojo']} />
            <mesh geometry={nodes.Cylinder001_4.geometry} material={materials['champi cafe']} />
          </group>
        </group>
      </group>
     </RigidBody>

    )
    
}

useGLTF.preload("/assets/models/world/Plazoleta.glb");
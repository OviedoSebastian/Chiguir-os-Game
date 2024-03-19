import { useGLTF, useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three";

export default function World(props) {

    const {nodes, materials} = useGLTF("/assets/models/world/GameWorld.glb");
    const PATH = "/assets/texture/floor/";

    const propsTexture = useTexture({
        map: PATH + "leafy_grass_diff_1k.jpg",
        displacementMap: PATH + "leafy_grass_disp_1k.png",
        maskMap: PATH + "leafy_grass_mask_1k.png",
        NormalMap: PATH + "leafy_grass_nor_gl_1k.jpg",
        roughnessMap: PATH + "leafy_grass_rough_1k.jpg",
    });

    // REPETICION DE LA TEXTURAS PARA SU AJUSTE EN EL MAPA
    propsTexture.map.repeat.set(4, 64);
    propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    propsTexture.displacementMap.repeat.set(4, 64);
    propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;
    
    propsTexture.maskMap.repeat.set(4, 64);
    propsTexture.maskMap.wrapS = propsTexture.maskMap.wrapT = RepeatWrapping;

    propsTexture.NormalMap.repeat.set(4, 64);
    propsTexture.NormalMap.wrapS = propsTexture.NormalMap.wrapT = RepeatWrapping;

    propsTexture.roughnessMap.repeat.set(4, 64);
    propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;
    // FIN DEL AJUSTE

    
    return (

        <group {...props} dispose={null}>
            <group>
                <mesh geometry={nodes.walls.geometry} />
                <mesh geometry={nodes.floor.geometry}>
                    <meshStandardMaterial {...propsTexture} />
                </mesh>
            </group>
        </group>

    )
    
}

useGLTF.preload("/assets/models/world/GameWorld.glb");
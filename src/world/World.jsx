import { useGLTF, useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {

    const {nodes, materials} = useGLTF("/assets/models/world/WorldWithFenceChiguiro.glb");


    // CONFIGURAR LAS TEXTURAS DEL PISO
    const PATH = "/assets/texture/floor/";

    const propsTextureFloor = useTexture({
        map: PATH + "leafy_grass_diff_1k.jpg",
        displacementMap: PATH + "leafy_grass_disp_1k.png",
        maskMap: PATH + "leafy_grass_mask_1k.png",
        NormalMap: PATH + "leafy_grass_nor_gl_1k.jpg",
        roughnessMap: PATH + "leafy_grass_rough_1k.jpg",
    });

    
    propsTextureFloor.map.repeat.set(4, 64);
    propsTextureFloor.map.wrapS = propsTextureFloor.map.wrapT = RepeatWrapping;

    propsTextureFloor.displacementMap.repeat.set(4, 64);
    propsTextureFloor.displacementMap.wrapS = propsTextureFloor.displacementMap.wrapT = RepeatWrapping;
    
    propsTextureFloor.maskMap.repeat.set(4, 64);
    propsTextureFloor.maskMap.wrapS = propsTextureFloor.maskMap.wrapT = RepeatWrapping;

    propsTextureFloor.NormalMap.repeat.set(4, 64);
    propsTextureFloor.NormalMap.wrapS = propsTextureFloor.NormalMap.wrapT = RepeatWrapping;

    propsTextureFloor.roughnessMap.repeat.set(4, 64);
    propsTextureFloor.roughnessMap.wrapS = propsTextureFloor.roughnessMap.wrapT = RepeatWrapping;


    // CONFIGURAR LAS TEXTURAS DE LAS PAREDES
    const PATH2 = "/assets/texture/walls/";

    const propsTextureWall = useTexture({
        map: PATH2 + "grey_diff.jpg",
        displacementMap: PATH2 + "grey_disp.png",
        maskMap: PATH2 + "grey_ao.jpg",
        NormalMap: PATH2 + "grey_nor.jpg",
        roughnessMap: PATH2 + "grey_rough.jpg",
    });

    
    propsTextureWall.map.repeat.set(4, 64);
    propsTextureWall.map.wrapS = propsTextureWall.map.wrapT = RepeatWrapping;

    propsTextureWall.displacementMap.repeat.set(4, 64);
    propsTextureWall.displacementMap.wrapS = propsTextureWall.displacementMap.wrapT = RepeatWrapping;
    
    propsTextureWall.maskMap.repeat.set(4, 64);
    propsTextureWall.maskMap.wrapS = propsTextureWall.maskMap.wrapT = RepeatWrapping;

    propsTextureWall.NormalMap.repeat.set(4, 64);
    propsTextureWall.NormalMap.wrapS = propsTextureWall.NormalMap.wrapT = RepeatWrapping;

    propsTextureWall.roughnessMap.repeat.set(4, 64);
    propsTextureWall.roughnessMap.wrapS = propsTextureWall.roughnessMap.wrapT = RepeatWrapping;




    
    return (

        <group {...props} dispose={null}>
            <group>

                {/*  PAREDES */}
                <mesh geometry={nodes.Walls.geometry}>
                    <meshStandardMaterial {...propsTextureWall} />
                </mesh> 

                {/* PISO */}
                <mesh receiveShadow={true} geometry={nodes.Floor.geometry}>
                    <meshStandardMaterial {...propsTextureFloor} />
                </mesh>

                {/* FENCE */}
                <mesh castShadow= {true} geometry={nodes.WoodenFence.geometry}>
                    <meshStandardMaterial
                     color = {"aqua"}
                     metalness={0}
                     roughness={0.5}
                    />
                </mesh>

                {/* CHIGUIRO */}
                <mesh castShadow= {true} geometry={nodes.Chiguiro.geometry}>
                    <meshStandardMaterial
                     color = {"#663919"}
                     metalness={0}
                     roughness={0.5}
                    />
                </mesh>
                

            </group>
        </group>

    )
    
}

useGLTF.preload("/assets/models/world/GameWorld.glb");
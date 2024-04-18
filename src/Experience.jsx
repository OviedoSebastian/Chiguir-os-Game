import { OrbitControls, useTexture, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RepeatWrapping } from "three";
import World from "./world/World";
import Lights from "./lights/Lights";

const Experience = () => {

    // Rutas de las texturas
    const PATH_materialfabric = "/assets/texture/fabric/";
    const PATH_containerside = "/assets/texture/containerSide/";
    const PATH_brick = "/assets/texture/bricks/";


    // Textura de tela industrial
    const propsFabricTexture = useTexture({
        map: PATH_materialfabric + "fabric_pattern_07_col_1_1k.png",
        NormalMap: PATH_materialfabric + "fabric_pattern_07_nor_gl_1k.jpg",
        roughnessMap: PATH_materialfabric + "fabric_pattern_07_rough_1k.jpg",
    });

    // Textura de contenedor de basura
    const propsContainerTexture = useTexture({
        map: PATH_containerside + "container_side_diff_1k.jpg",
        displacementMap: PATH_containerside + "container_side_disp_1k.png",
        NormalMap: PATH_containerside + "container_side_nor_gl_1k.jpg",
        roughnessMap: PATH_containerside + "container_side_rough_1k.jpg",
    });

    // Textura de ladrillos
    const propsBricksTexture = useTexture({
        map: PATH_brick + "brick_4_diff_1k.jpg",
        displacementMap: PATH_brick + "brick_4_disp_1k.png",
        NormalMap: PATH_brick + "brick_4_nor_gl_1k.jpg",
        roughnessMap: PATH_brick + "brick_4_rough_1k.jpg",
    });



    const boxRef = useRef(null);
    const boxnormaleRef = useRef(null);
    const boxlambertRef = useRef(null);
    const boxmatcapRef = useRef(null);
    const boxphongRef = useRef(null);
    const boxphysicalgRef = useRef(null);
    const boxtoongRef = useRef(null);
    
    useFrame(({clock}, delta) => {

        boxRef.current.rotation.y = Math.cos(clock.getElapsedTime());
        boxnormaleRef.current.rotation.y = Math.sin(clock.getElapsedTime());
        boxlambertRef.current.rotation.y = Math.cos(clock.getElapsedTime());
        boxmatcapRef.current.rotation.y = Math.sin(clock.getElapsedTime());
        boxphongRef.current.rotation.y = Math.cos(clock.getElapsedTime());
        boxphysicalgRef.current.rotation.y = Math.sin(clock.getElapsedTime());
        boxtoongRef.current.rotation.y = Math.cos(clock.getElapsedTime());
    });

    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />


    return (
        <>
            <Lights/>
            <World />

            {/* Figuras de la tarea */}
            <mesh position={[0, 5, 0]} ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial {...propsFabricTexture} />
            </mesh>
        
            <mesh position={[0, 5, -10]} ref={boxnormaleRef}>
                <torusGeometry args={[1, 0.4, 16, 100]} />
                <meshNormalMaterial  />
            </mesh>

            <mesh position={[0, 5, -5]} ref={boxlambertRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshLambertMaterial {...propsBricksTexture}/>
            </mesh>

            <mesh position={[0, 5, 5]} ref={boxmatcapRef}>
                <tetrahedronGeometry args={[1, 5]} />
                <meshMatcapMaterial {...propsContainerTexture}/> 
            </mesh>

            <mesh position={[0, 5, -15]} ref={boxphongRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial {...propsContainerTexture}/>
            </mesh>

            <mesh position={[0, 5, 15]} ref={boxphysicalgRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial {...propsBricksTexture}/>
                {/* <meshPhysicalMaterial color = {"orange"}/> */}
            </mesh>

            <mesh position={[0, 5, 10]} ref={boxtoongRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshToonMaterial {...propsFabricTexture}/>
            </mesh>

            <OrbitControls makeDefault/>
        
        </>

    )
}

export default Experience;
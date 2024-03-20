import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RepeatWrapping } from "three";
import World from "./world/World";

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
    // const boxdistanceRef = useRef(null);
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


    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            <World />

            {/* Al agregar el distance material el proyecto muere */}
            {/* <mesh position={[4, 0, 1]} ref={boxdistanceRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshDistanceMaterial color = {"white"}/>
            </mesh> */}

            {/* Figuras de la tarea */}
            <mesh position={[0, 2, 10]} ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial {...propsFabricTexture} />
            </mesh>
        
            <mesh position={[4, 2.6, -30]} ref={boxnormaleRef}>
                <torusGeometry args={[1, 0.4, 16, 100]} />
                <meshNormalMaterial  />
            </mesh>

            <mesh position={[2, 2, 15]} ref={boxlambertRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshLambertMaterial {...propsBricksTexture}/>
            </mesh>

            <mesh position={[-2, 2.6, -1]} ref={boxmatcapRef}>
                <tetrahedronGeometry args={[1, 5]} />
                <meshMatcapMaterial {...propsContainerTexture}/> 
            </mesh>

            <mesh position={[-8, 2.5, -50]} ref={boxphongRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial {...propsContainerTexture}/>
            </mesh>

            <mesh position={[-6, 2, 5]} ref={boxphysicalgRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial {...propsBricksTexture}/>
                {/* <meshPhysicalMaterial color = {"orange"}/> */}
            </mesh>

            <mesh position={[6, 2.3, 20]} ref={boxtoongRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshToonMaterial {...propsFabricTexture}/>
            </mesh>

            <OrbitControls makeDefault/>
        
        </>

    )
}

export default Experience;
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import World from "./world/World";

const Experience = () => {
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
                <meshStandardMaterial color={"purple"} />
            </mesh>
        
            <mesh position={[4, 2.6, -30]} ref={boxnormaleRef}>
                <torusGeometry args={[1, 0.4, 16, 100]} />
                <meshNormalMaterial  color = {"white"}/>
            </mesh>

            <mesh position={[2, 2, 15]} ref={boxlambertRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshLambertMaterial  color = {"white"}/>
            </mesh>

            <mesh position={[-2, 2.6, -1]} ref={boxmatcapRef}>
                <ringGeometry args={[1, 1.4, 64]} />
                <meshMatcapMaterial color = {"blue"}/>
            </mesh>

            <mesh position={[-8, 2, -50]} ref={boxphongRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color = {"red"}/>
            </mesh>

            <mesh position={[-6, 2, 5]} ref={boxphysicalgRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color = {"orange"}/>
            </mesh>

            <mesh position={[6, 2.3, 50]} ref={boxtoongRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshPhongMaterial color = {"grey"}/>
            </mesh>

            <OrbitControls makeDefault/>
        
        </>

    )
}

export default Experience;
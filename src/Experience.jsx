import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Plane } from "@react-three/drei";

const Experience = () => {
    const boxRef = useRef(null);
    // const boxdistanceRef = useRef(null);
    const boxnormaleRef = useRef(null);
    const boxlambertRef = useRef(null);
    const boxmatcapRef = useRef(null);
    const boxphongRef = useRef(null);
    const boxphysicalgRef = useRef(null);
    const boxtoongRef = useRef(null);
    const planeRef = useRef(null);
    
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

            <mesh position={[0, 0, 1]} ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"purple"} />
            </mesh>

            {/* Al agregar el distance material el proyecto muere */}
            {/* <mesh position={[4, 0, 1]} ref={boxdistanceRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshDistanceMaterial color = {"white"}/>
            </mesh> */}
        
            <mesh position={[4, 0, 1]} ref={boxnormaleRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshNormalMaterial  color = {"white"}/>
            </mesh>

            <mesh position={[2, 0, 1]} ref={boxlambertRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshLambertMaterial  color = {"white"}/>
            </mesh>

            <mesh position={[-2, 0, 1]} ref={boxmatcapRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshMatcapMaterial color = {"blue"}/>
            </mesh>

            <mesh position={[-4, 0, 1]} ref={boxphongRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color = {"red"}/>
            </mesh>

            <mesh position={[-6, 0, 1]} ref={boxphysicalgRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color = {"orange"}/>
            </mesh>

            <mesh position={[6, 0, 1]} ref={boxtoongRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color = {"grey"}/>
            </mesh>

            <mesh ref={planeRef}  position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[10, 1, 1]}> 
                <Plane  args={[100, 10]}/>
                <meshBasicMaterial  color={'grey'} />
            </mesh>

            {/* <PerspectiveCamera enableZoom enablePan enableRotate position={[1, 5, 7]} /> */}
            <OrbitControls />
        
        </>

    )
}

export default Experience;
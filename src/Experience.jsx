import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Plane } from "@react-three/drei";

const Experience = () => {

    const planeRef = useRef(null);
    const boxRef = useRef(null);
    // const { camera } = useThree

    useFrame((state, delta)=>{
        // planeRef.current.rotation.x += 1 * delta;
    })

    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            
            <mesh ref={planeRef} position={[0, 0, 0]}> 
                <Plane args={[10, 100]} rotation={[0,0,0]}/>
                <meshStandardMaterial color={'green'} />
            </mesh>

            {/* <mesh position={[0, 5, 0]} ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshDistanceMaterial />
            </mesh> */}
            {/* Control de movimiento de la camara */}
            <OrbitControls />
            <PerspectiveCamera position={[0, 0, 50]} makeDefault />
        </>

    )
}

export default Experience;

// const Experience = ({ title, subtitle }) => {

//     return (
//         <>
//             <h1 className="title"> {title} </h1>
//             <span> {subtitle} </span>
//         </>
//     )
// }

// export default Experience;
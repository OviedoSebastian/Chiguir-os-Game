import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Plane } from "@react-three/drei";

const Experience = () => {

    const planeRef = useRef(null);
    const cameraRef = useRef(null);

    useFrame((state, delta)=>{
        // planeRef.current.rotation.x += 1 * delta;
    })

    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            
            <mesh ref={planeRef}> 
                <Plane args={[10, 100]} />
                <meshStandardMaterial color={"purple"} />
            </mesh>
            
            {/* Control de movimiento de la camara */}
            <OrbitControls enableZoom enablePan enableRotate />
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
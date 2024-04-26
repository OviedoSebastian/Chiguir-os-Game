import { OrbitControls, useTexture, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RepeatWrapping } from "three";
import World from "./level1/World";
import Lights from "./lights/Lights";
import Environments from "./enviroments/Environments";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { AvatarProvider } from "./context/AvatarContext";
import RoutesSquidGames from "./routes/RoutesSquidGames"

const Experience = () => {

    return (
        <>
            <Lights/>
            <Physics debug={true}>
                <World />
                <Environments/>
                <Perf position="top-left"/>
            </Physics>
            {/* <OrbitControls makeDefault/> */}
            <AvatarProvider>
            <RoutesSquidGames />
            </AvatarProvider>

        
        </>

    )
}

export default Experience;
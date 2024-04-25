import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import AvatarCientific from "./characters/avatar/AvatarCientific";
import AvatarEngineer from "./characters/avatar/AvatarEngineer";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

export default function Level3() {
    const map = useMovements();


    return (
        <KeyboardControls map={map} >
            <Canvas
                camera={{
                    position: [0, 1, 0]
                }}
            >
                {/* <Perf position="top-left" /> */}
                <Suspense fallback={null}>
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
                        <World />
                        <Girl />
                        <RedMen />
                        <Ecctrl
                            capsuleHalfHeight={0.5}
                            floatingDis={0.2}
                            camInitDis={-3}
                            camMaxDis={-4}
                            maxVelLimit={5} 
                            jumpVel={1} 
                            position={[0,6,0]}
                        >
                            {/* <AvatarEngineer /> */}
                            <AvatarCientific />
                        </Ecctrl>
                    </Physics>
                    <WelcomeText position={[0, 1, -2]} />
                </Suspense>
                <Controls />
            </Canvas>
        </KeyboardControls>

    )
}

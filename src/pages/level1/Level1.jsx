import { KeyboardControls, Loader, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import AvatarCientific from "./characters/enemies/AvatarCientific";
import AvatarVigilant from "./characters/enemies/AvatarVigilant";
import AvatarEngineer from "./characters/avatar/AvatarEngineer";
import useMovements from "../../utils/key-movements";
import CharacterHud from "../hud/CharacterHud"
import Pocion from "./collectables/Pocion";
import Radio from "./collectables/Radio";

export default function Level1() {

    const map = useMovements();
    const [vida, setVida] = useState(3);
    const [radio, setRadio] = useState(0);
    const [potion, setPotion] = useState(0);
    const [jumpVel, setJumpVel] = useState(3.5); 

    const handleRadio = () => {
        if (radio < 5) {
            setRadio((prevLaptop) => prevLaptop + 1);
        }
    };
    
    const handlePotion = () => {
        if (potion < 5) {
            setPotion((prevPotion) => prevPotion + 1);
        }
    };

    useEffect(() => {
        if (radio >= 5 && potion >= 5) {
            setJumpVel(10);
        }
    }, [radio, potion]);

    return (
        <KeyboardControls map={map} >
            <Canvas
                camera={{
                    position: [0, 1, 0]
                }}
            >
                <Suspense fallback={null}>
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
                        <World />
                        <Pocion catchPotion={handlePotion} setNumeroDePociones={5} position={[-2.5, -0.3, 10]}/>
                        <Radio position={[-2.5, -1.3, -4]} catchRadio={handleRadio} />
                        <AvatarVigilant position={[0, 0.42, 0]}/>
                        <AvatarEngineer jumpHeight={jumpVel} />
                    </Physics>
                </Suspense>
                {/* <WelcomeText /> */}
                <Controls   />
            </Canvas>
            <Loader >
                { 'Cargando nivel' }
            </Loader>
            <CharacterHud 
                vidas={vida}
                recompensas={10}
                radio={radio}
                potion={potion}
            />
        </KeyboardControls>
    )
} 

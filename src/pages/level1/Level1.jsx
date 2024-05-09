import { KeyboardControls, Loader, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import AvatarVigilant from "./characters/enemies/AvatarVigilant";
import AvatarEngineer from "./characters/avatar/AvatarEngineer";
import useMovements from "../../utils/key-movements";
import CharacterHud from "../hud/CharacterHud"
import Pocion from "./collectibles/Pocion";
import Radio from "./collectibles/Radio";
import Ardilla from "./characters/avatar/Ardilla";
import Buttons from "./View/Buttons";
import AvatarVigilant2 from "./characters/enemies/AvatarVigilant2";
import AvatarVigilant3 from "./characters/enemies/AvatarVigilant3";

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
        <>
        
        <KeyboardControls map={map} >
            <Buttons/>
            <Canvas
                camera={{
                    position: [0, 1, 0]
                }}

                shadows={true}
            >
                <Suspense fallback={null}>
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
                        <World />
                        <Pocion catchPotion={handlePotion} setNumeroDePociones={5} position={[-2.5, -0.3, 10]}/>
                        <Radio position={[-2.5, -1, -4]} catchRadio={handleRadio} />
                        
                        <AvatarVigilant position={[10, 0.42, 0]}/>
                        <AvatarVigilant position={[1, 0.42, 20]}/>
                        <AvatarVigilant position={[-10, 0.42, -28]}/>
                        <AvatarVigilant position={[-20, 0.42, 33]}/>

                        <AvatarVigilant2 position={[3, 0.42, 0]}/>
                        <AvatarVigilant2 position={[15, 0.42, 4]}/>
                        <AvatarVigilant2 position={[-15, 0.42, 8]}/>

                        <AvatarVigilant3 position={[-39, 0.42, 14]}/>


                        <AvatarEngineer jumpHeight={jumpVel} />
                        <Ardilla position={[44,5.5,-13.3]} />
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
        </>
    )
} 

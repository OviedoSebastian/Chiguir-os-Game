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
import AvatarEngineer from "./characters/avatar/AvatarEngineer";
import useMovements from "../../utils/key-movements";
import CharacterHud from "../hud/CharacterHud"
import Pocion from "./collectibles/Pocion";
import Radio from "./collectibles/Radio";
import Ardilla from "./characters/avatar/Ardilla";
import Buttons from "./View/Buttons";

export default function Level1() {

    const map = useMovements();
    const [vida, setVida] = useState(3);
    const [recompensas, setRecompensas] = useState(0);
    const [radio, setRadio] = useState(0);
    const [potion, setPotion] = useState(0);
    const [arma, setArma] = useState("Martillo");
    const [jumpVel, setJumpVel] = useState(3.3); // Valor inicial de jumpVel
    const [numeroDePociones, setNumeroDePociones] = useState(0);

    const handleJump = () => {
        // Incrementar las recompensas solo si no exceden el límite de 5
        if (recompensas < 5) {
            setRecompensas(prevRecompensas => prevRecompensas + 1);
        }
    };

    const handleLaptop = () => {
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
        if (radio === 5 && potion === 5) {
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
                        <Pocion setNumeroDePociones={setNumeroDePociones} position={[-2.5, -0.3, 10]}/>
                        <Radio position={[-2.5, -1.3, -4]}/>
                        <AvatarCientific position={[0, 0.42, 0]}/>
                        <AvatarEngineer />
                        <Ardilla position={[44,5.9,-13.3]} />
                    </Physics>
                </Suspense>
                {/* <WelcomeText /> */}
                
                <Controls onJump={handleJump} onKeyA={handleLaptop} onKeyD={handlePotion}/>
            </Canvas>
            <Loader >
                { 'Cargando nivel' }
            </Loader>
            <CharacterHud 
                vidas={vida}
                recompensas={recompensas}
                laptop={radio}
                potion={potion}
                arma={arma}            />
            
        </KeyboardControls>
        </>
    )
} 

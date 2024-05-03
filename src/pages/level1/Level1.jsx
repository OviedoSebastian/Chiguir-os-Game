import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import AvatarCientific from "./characters/avatar/AvatarCientific";
import AvatarEngineer from "./characters/avatar/AvatarEngineer";
import useMovements from "../../utils/key-movements";
import CharacterHud from "../hud/CharacterHud"
import { useLocation } from "react-router-dom";
import { socket } from "../../socket/socket-manager";
import { useAtom } from "jotai";
import { Players, playersAtom } from "../../components/Players";
import Pocion from "./collectables/Pocion";
import Radio from "./collectables/Radio";

export default function Level1() {

    // Recupera valores enviados desde el router
    const location = useLocation();

    const [players] = useAtom(playersAtom);
    const map = useMovements();
    const [vida, setVida] = useState(3);
    const [recompensas, setRecompensas] = useState(0);
    const [radio, setRadio] = useState(0);
    const [potion, setPotion] = useState(0);
    const [arma, setArma] = useState("Espada");
    const [jumpVel, setJumpVel] = useState(3.3); // Valor inicial de jumpVel
    const [numeroDePociones, setNumeroDePociones] = useState(0);

    const actualizarVida = (nuevaVida) => {
        setVida(nuevaVida);
    };

    const handleJump = () => {
        // Incrementar las recompensas solo si no exceden el límite de 5
        if (recompensas < 5) {
            setRecompensas(prevRecompensas => prevRecompensas + 1);
        }
    };

    const handleLaptop = () => {
        // Incrementar el contador de laptop solo si no excede el límite de 5
        if (radio < 5) {
            setRadio((prevLaptop) => prevLaptop + 1);
        }
    };

    const handlePotion = () => {
        // Incrementar el contador de potion solo si no excede el límite de 5
        if (potion < 5) {
            setPotion((prevPotion) => prevPotion + 1);
        }
    };

    // Efecto para actualizar jumpVel cuando recompensas, laptop y potion alcancen 5
    useEffect(() => {
        if (radio === 5 && potion === 5) {
            setJumpVel(6); // Cambia jumpVel a 10 cuando todos los contadores lleguen a 5
        }
    }, [radio, potion]);


    useEffect(()=> {
        socket.emit("player-connected")
    }, []);

    return (
        
        <KeyboardControls map={map} >
            <Players />
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
                        <Pocion setNumeroDePociones={setNumeroDePociones} position={[-2.5, -0.3, 10]}/>
                        <Radio position={[-2.5, -1.3, -4]}/>
                        <AvatarEngineer url={players[0]?.urlAvatar}/>  
                        <AvatarCientific url={players[1]?.urlAvatar}/>
                    </Physics>
                    
                </Suspense>
                
                <WelcomeText />
                <Controls onJump={handleJump} onKeyA={handleLaptop} onKeyD={handlePotion}/>
            </Canvas>
            <CharacterHud 
                vidas={vida}
                recompensas={recompensas}
                laptop={radio}
                potion={potion}
                arma={arma}            />
        </KeyboardControls>

    )
} 
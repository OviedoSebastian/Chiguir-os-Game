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
import { disconnectSocket, socket } from "../../socket/socket-manager";
import { useAtom } from "jotai";
import { Players, playersAtom } from "../../components/Players";

export default function Level1() {

    // Recupera valores enviados desde el router
    const location = useLocation();

    const [players] = useAtom(playersAtom);
    const map = useMovements();

    const actualizarVida = (nuevaVida) => {
        setVida(nuevaVida);
    };
    const [vida, setVida] = useState(50);
    const vidasPerdidas = 2;

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
                        <AvatarEngineer url={players[0]?.urlAvatar}/>  
                        <AvatarCientific url={players[1]?.urlAvatar}/>
                        
                    </Physics>
                    
                </Suspense>
                <WelcomeText />
                <Controls />
            </Canvas>
            <CharacterHud vida={vida} vidasPerdidas={vidasPerdidas} actualizarVida={actualizarVida} />
        </KeyboardControls>

    )
}

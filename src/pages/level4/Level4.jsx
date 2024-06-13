import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import AvatarCientific from "./characters/avatar/AvatarCientific";
import useMovements from "../../utils/key-movements";
import LoadingScreen from "./hud/LoadingScreen";
import Buttons from "./hud/Buttons";
import CharacterHudLv4 from "./hud/CharacterHudLv4";
import { disconnectSocket, socket } from "../../socket/socket-manager";
import { useAtom } from "jotai";
import { Players, playersAtom } from "../../components/Players";
import AvatarEngineer from "./characters/avatar/AvatarEngineer";

export default function Level4() {

    const map = useMovements();
    const [life, setLife] = useState(3);
    const [endLevel, setEndLevel] = useState(false);
    const [checkpoint, setCheckpoint] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showYouLost, setShowYouLost] = useState(false);
    const [cooldown, setCooldown] = useState(false);
    const [panino, setPanino] = useState(0);
    const [players] = useAtom(playersAtom);

    const onContinue = () => {
        setShowYouLost(false);
    };

    const endingLevel = () => {
        setEndLevel(true);
    };

    useEffect(()=>{
        socket.emit("player-connected")
    }, [])

    //Desconecta el socket cuando cierra la ventana
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            // Call your disconnect function here
            disconnectSocket();
            // Optionally, you can show a confirmation dialog
            event.returnValue = "Are you sure you want to leave?";
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);


    return (
        <KeyboardControls map={map} >
            <Players />
            <Canvas
                camera={{
                    position: [0, 1, 0]
                }}
            >
                <Suspense fallback={<LoadingScreen />}>
                    <Lights />
                    <Environments />
                    <Physics debug={false} timeStep="vary">
                        <World />
                            {players[0]?.urlAvatar && (
                                <AvatarCientific urlModel={players[0].urlAvatar} />
                            )}
                            {players[1]?.urlAvatar && (
                                <AvatarEngineer urlModel={players[1].urlAvatar} />
                            )}
                    </Physics>
                </Suspense>
                <Controls />
            </Canvas>
            <Buttons />
            <CharacterHudLv4
                lifes={life}
                userInfo={userInfo}
                endLevel={endLevel}
                showYouLost={showYouLost}
                panino={panino}
                onContinue={onContinue}
            />
        </KeyboardControls>

    )
}

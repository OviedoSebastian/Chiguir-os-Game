import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
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

export default function Level4() {

    const map = useMovements();

    const [life, setLife] = useState(3);
    const [endLevel, setEndLevel] = useState(false);
    const [checkpoint, setCheckpoint] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showYouLost, setShowYouLost] = useState(false);
    const [cooldown, setCooldown] = useState(false);
    const [panino, setPanino] = useState(0);

    const onContinue = () => {
        setShowYouLost(false);
    };

    const endingLevel = () => {
        setEndLevel(true);
    };

    return (
        <KeyboardControls map={map} >
            <Canvas
                camera={{
                    position: [0, 1, 0]
                }}
            >
                <Suspense fallback={<LoadingScreen />}>
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
                        <World />
                        <AvatarCientific />
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

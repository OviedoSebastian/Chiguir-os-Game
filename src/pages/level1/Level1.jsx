import { KeyboardControls, OrbitControls } from "@react-three/drei";
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
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import CharacterHud from "../hud/CharacterHud"

export default function Level1() {

    const map = useMovements();
    const [vida, setVida] = useState(3);
    const [recompensas, setRecompensas] = useState(0);
    const [laptop, setLaptop] = useState(0);
    const [potion, setPotion] = useState(0);
    const [arma, setArma] = useState("Espada");
    const [jumpVel, setJumpVel] = useState(3.3);
    
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
        if (laptop < 5) {
            setLaptop((prevLaptop) => prevLaptop + 1);
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
        if (laptop === 5 && potion === 5) {
            setJumpVel(10); // Cambia jumpVel a 10 cuando todos los contadores lleguen a 5
        }
    }, [laptop, potion]);


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
                        <AvatarEngineer />
                        <AvatarCientific position={[0,1.3,0]}/>
                    </Physics>
                </Suspense>
                <WelcomeText />
                <Controls onJump={handleJump} onKeyA={handleLaptop} onKeyD={handlePotion} />
            </Canvas>
            <CharacterHud
                vidas={vida}
                recompensas={recompensas}
                laptop={laptop}
                potion={potion}
                arma={arma} />
        </KeyboardControls>

    )
}

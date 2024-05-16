import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
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
import { useAuth } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout";

export default function Level2() {

    const map = useMovements();
    const auth = useAuth();
    const [valueUser, setValuesUser] = useState(null);
    
    useEffect(() => {
        // para saber todos los valores que se pueden recuperar por medio del 
        // inicio de sesion por el correo, imprimir por oconsola lo siguiente console.log(auth.userLogged);
        if(auth.userLogged){
            const { displayName, email } = auth.userLogged;
            console.log(displayName, email);
            setValuesUser({
                displayName: displayName,
                email: email,
            });
        }
    }, [auth.userLogged])


    const actualizarVida = (nuevaVida) => {
        setVida(nuevaVida);
    };
    const [vida, setVida] = useState(50);
    const vidasPerdidas = 2;

    return (
        
        <KeyboardControls map={map} >
            <Logout />
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
                        <Ecctrl
                            capsuleHalfHeight={0.5}
                            floatingDis={0.2}
                            camInitDis={-3}
                            camMaxDis={-4}
                            maxVelLimit={6} 
                            jumpVel={5} 
                            position={[0, 10, 0]}
                        >
                            {/* <AvatarEngineer /> */}
                            <AvatarCientific />
                        </Ecctrl>
                    </Physics>
                    
                </Suspense>
                <WelcomeText />
                <Controls />
            </Canvas>
            <CharacterHud vida={vida} vidasPerdidas={vidasPerdidas} actualizarVida={actualizarVida} />
        </KeyboardControls>

    )
}

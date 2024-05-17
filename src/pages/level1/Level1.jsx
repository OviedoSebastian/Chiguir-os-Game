import { KeyboardControls, Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
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
    const [jumpVel, setJumpVel] = useState(5);
    const [checkpoint, setCheckpoint] = useState(false);
    const [potioncheckpoint, setPotioncheckpoint] = useState(0);
    const [radiochackpoint, setRadiochackpoint] = useState(0);

    const savecheckpoint = () => {
        setCheckpoint(true);
        setPotioncheckpoint(potion);
        setRadiochackpoint(radio);
        console.log("Progreso Guardado");
    };

    const loseLife = () => {
        setVida((prevVida) => prevVida - 1);
        if(checkpoint){
            setPotion(potioncheckpoint);
            setRadio(radiochackpoint);
        }else{
            setPotion(0);
            setRadio(0);
        }
        
    };

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

    const resetPoint = () => {
        setVida(3);
        setPotion(0);
        setRadio(0);
        setCheckpoint(false);
        setPotioncheckpoint(0);
        setRadiochackpoint(0);
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
                        
                        <AvatarVigilant position={[10, 0.42, 0]} loseLife={loseLife} />
                        <AvatarVigilant position={[1, 0.42, 20]} loseLife={loseLife}/>
                        <AvatarVigilant position={[-10, 0.42, -28]} loseLife={loseLife}/>
                        <AvatarVigilant position={[-20, 0.42, 33]} loseLife={loseLife}/>

                        <AvatarVigilant2 position={[3, 0.42, 0]} loseLife={loseLife}/>
                        <AvatarVigilant2 position={[15, 0.42, 4]} loseLife={loseLife}/>
                        <AvatarVigilant2 position={[-15, 0.42, 8]} loseLife={loseLife}/>

                        <AvatarVigilant3 position={[-39, 0.42, 14]} loseLife={loseLife}/>

                        <AvatarEngineer jumpHeight={jumpVel} vida={vida} resetPoint={resetPoint} />
                        <Ardilla savecheckpoint={savecheckpoint}/>
                    </Physics>
                </Suspense>
                <Controls />
            </Canvas>
            <Loader >
                { 'Cargando nivel' }
            </Loader>
            <CharacterHud 
                vidas={vida}
                radio={radio}
                potion={potion}
            />
        </KeyboardControls>
        </>
    )
} 

import { KeyboardControls, Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import Futbolista from "./characters/avatar/Futbolista";
import useMovements from "../../utils/key-movements";
import Buttons from "../level1/View/Buttons";
import { useAuth } from "../../context/AuthContext";
import { createuser, readUser } from "../../db/users-collection";
import Ardilla from "./characters/avatar/Ardilla";
import { createcheckpoint, editCheckpoint, readCheckpoint } from "../../db/level2-collection";
import CharacterHudLevel3 from "./hud/CharacterHudLevel3";

export default function Level3() {
    const map = useMovements();
    const auth = useAuth();
    const [vida, setVida] = useState(3);
    const [endLevel, setEndLevel] = useState(false);
    const [jumpVel, setJumpVel] = useState(10);
    const [checkpoint, setCheckpoint] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showYouLost, setShowYouLost] = useState(false);

    const [fueraMapa, setFueraMapa] = useState(false);

    const saveDataUser = async (valueUser) => {
        await createuser(valueUser);
    };

    const readDataUser = async (email) => {
        await readUser(email)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    };

    const saveDatacheckpoint = async (valueUser) => {
        await createcheckpoint(valueUser);
    };

    const onContinue = () => {
        setShowYouLost(false);
    };

    const readDataCheckpoint = async (email) => {

        try {
            const checkpointData = await readCheckpoint(email);
            return checkpointData;
        } catch (error) {
            console.error(error);
            return null;
        }

    };

    const savecheckpoint = () => {
        setCheckpoint(true);
        const { email } = auth.userLogged;
        // console.log(displayName, email); //Verificar los datos a guardar
        saveDatacheckpoint({
            email: email,
            vidas: vida,
            curado: curao,
            checkpoint: checkpoint,
        });

    };

    useEffect(() => {
        // para saber todos los valores que se pueden recuperar por medio del
        // inicio de sesion por el correo, imprimir por oconsola lo siguiente console.log(auth.userLogged);
        if (auth.userLogged) {
            const { displayName, email, photoURL } = auth.userLogged;
            // console.log(displayName, email); //Verificar los datos a guardar
            saveDataUser({
                displayName: displayName,
                email: email,
                photoURL: photoURL,
            });

            readDataUser(email); //Recupera el usuario guardado en la BD

            setUserInfo({
                displayName: displayName,
                email: email,
                photoURL: photoURL,
            });

        }
    }, [auth.userLogged]);
    //////////////////////////////////////////////////////////////////////////////////

    const finalizoNivel = () => {
        console.log("SE TERMINOOO EL NIVEL");
        setEndLevel(true);
    };

    const resetPoint = () => {
        setShowYouLost(true);
        setVida(3);
        setCurao(0);
        setCheckpoint(false);
        editCheckpoint(auth.userLogged.email, {
            vidas: 3,
            curado: 0,
            checkpoint: checkpoint,
        });
    };

    const loseLife = async () => {
        // Modificar acorde al nivel

        // const checkpointData = await readDataCheckpoint(auth.userLogged.email);
        // setVida((prevVida) => prevVida - 1);
        // setCuraoCogio(false)
        // setCuraoCogio1(false)
        // setCuraoCogio2(false)

        // if (checkpointData && checkpointData.checkpoint) {
        //     setCurao(checkpointData.curado);
        // } else {
        //     setCurao(0);
        //     console.log("No guardaste en el checkpoint :c");
        // }

    };

    const fueraDelMapa = () => {
        setFueraMapa(true);
    }

    const dentroDelMapa = () => {
        setFueraMapa(false);
    }

    return (
        <>
            <KeyboardControls map={map}>
                
                {/* <Logout /> */}
                <Canvas
                    camera={{
                        position: [0, 1, 0],
                    }}
                >
                    {/* <Perf position="top-left" /> */}
                    <Suspense fallback={null}>
                        <Lights />
                        <Environments />
                        <Physics debug={true}>
                            <World finishedLevel={finalizoNivel} />
                            {/* <AvatarEngineer /> */}
                            <Futbolista
                                jumpHeight={jumpVel}
                                vida={vida}
                                resetPoint={resetPoint}
                                offTheMap={fueraMapa}
                                dentroDelMapa={dentroDelMapa}
                            />
                            <Ardilla position={[-21, 3, 5]} savecheckpoint={savecheckpoint} />
                        </Physics>
                    </Suspense>
                    <Controls />
                </Canvas>
                <Buttons />
                <Loader />
                <CharacterHudLevel3 vidas={vida} userInfo={userInfo} endLevel={endLevel} jumpHeight={jumpVel} showYouLost={showYouLost} onContinue={onContinue} />
            </KeyboardControls>
        </>
    );
}

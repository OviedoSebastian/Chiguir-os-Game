import { KeyboardControls, Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import useMovements from "../../utils/key-movements";
import Buttons from "../level1/View/Buttons";
import { useAuth } from "../../context/AuthContext";
import { createuser, readUser } from "../../db/users-collection";
import Ardilla from "./characters/avatar/Ardilla";
import {
    createcheckpoint,
    editCheckpoint,
    readCheckpoint,
} from "../../db/level3-collection";
import CharacterHudLevel3 from "./hud/CharacterHudLevel3";
import Portero from "./characters/enemies/Portero";
import AvatarAthlete from "./characters/avatar/AvatarAthlete";
import SpeedMenox from "./colectibles/SpeedMenox";
import Panino from "./colectibles/Panino";
import Balon from "./colectibles/Balon";
import LimiteZone from "./world/LimiteZone";
import { Perf } from "r3f-perf";


export default function Level3() {
    const map = useMovements();
    const auth = useAuth();
    const [vida, setVida] = useState(3);
    const [speedMenox, setSpeedMenox] = useState(0);
    const [takeSpeed, setTakeSpeed] = useState(false);
    const [panino, setPanino] = useState(0);
    const [takePanino, setTakePanino] = useState(false);
    const [endLevel, setEndLevel] = useState(false);
    const [checkpoint, setCheckpoint] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showYouLost, setShowYouLost] = useState(false);
    const [gol, setGolg] = useState(0);
    const [golHecho, setGolHecho] = useState(false);
    const [cooldown, setCooldown] = useState(false);

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
            speedMenox: speedMenox,
            gol: gol,
            panino: panino,
            checkpoint: checkpoint,
        });
    };

    useEffect(() => {
        // para saber todos los valores que se pueden recuperar por medio del
        // inicio de sesion por el correo, imprimir por consola lo siguiente console.log(auth.userLogged);
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
        setEndLevel(true);
    };

    const resetPoint = () => {
        setShowYouLost(true);
        setVida(3);
        setPanino(0);
        setSpeedMenox(0);
        setGolg(0);
        setCheckpoint(false);
        editCheckpoint(auth.userLogged.email, {
            vidas: 3,
            panino: 0,
            speedMenox: 0,
            gol: 0,
            checkpoint: checkpoint,
            
        });
    };

    const loseLife = async () => {
        //Modificar acorde al nivel
        const checkpointData = await readDataCheckpoint(auth.userLogged.email);
        setVida( vida - 1);
        if (checkpointData && checkpointData.checkpoint) {
            setPanino(checkpointData.panino);
            setSpeedMenox(checkpointData.speedMenox);
            setGolg(checkpointData.gol);
        } else {
            setPanino(0);
            setSpeedMenox(0);
            setGolg(0);
            console.log("No guardaste en el checkpoint :c");
        }
    };

    const fueraDelMapa = () => {
        setFueraMapa(true);
    };

    const dentroDelMapa = () => {
        setFueraMapa(false);
    };

    const notGoal = () => {
        setGolHecho(false);
    };

    const winMatch = () => {
        // Función para que cuando los goles sean dos, se abra la puerta
        // En construcción...
    };

    const handleGoals = () => {
        if (!cooldown) {
            setGolg(gol + 1);
            setGolHecho(true);
            console.log("GOL ", gol);

            setCooldown(true); // Activar el cooldown

            // Desactivar el cooldown después de un segundo
            setTimeout(() => {
                setCooldown(false);
            }, 1000);
        }
    };

    const handleSpeedMenox = () => {
        setSpeedMenox((speedMenox) => speedMenox + 1);
    };

    const handlePanino = () => {
        setPanino((panino) => panino + 1);
        setTakePanino(true);
    };

    return (
        <>
            <KeyboardControls map={map}>
                {/* <Logout /> */}
                <Canvas
                    camera={{
                        position: [0, 1, 0],
                    }}
                >
                    <Perf position="top-left" />
                    <Suspense fallback={null}>
                        <Lights />
                        <Environments />
                        <Physics debug={false}>
                            <World finishedLevel={finalizoNivel} catchGol={handleGoals} />
                            <LimiteZone position={[0, -10, 0]} fueraDelMapa={fueraDelMapa} />
                            <AvatarAthlete
                                vida={vida}
                                resetPoint={resetPoint}
                                offTheMap={fueraMapa}
                                dentroDelMapa={dentroDelMapa}
                            />
                            <Portero position={[0.5, 2, 36]} />
                            <Ardilla position={[-15, 3, 0]} savecheckpoint={savecheckpoint} />
                            <SpeedMenox catchSpeed={handleSpeedMenox} />
                            <Panino catchPanino={handlePanino} takePanino={takePanino} /> 
                            <Balon isGol={golHecho} notIsGoal={notGoal} gol={gol} />
                        </Physics>
                    </Suspense>
                    <Controls />
                </Canvas>
                <Buttons />
                <Loader />
                <CharacterHudLevel3
                    vidas={vida}
                    userInfo={userInfo}
                    endLevel={endLevel}
                    showYouLost={showYouLost}
                    onContinue={onContinue}
                    gol={gol}
                    speedMenox={speedMenox}
                    panino={panino}
                />
            </KeyboardControls>
        </>
    );
}

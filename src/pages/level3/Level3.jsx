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
import Panino2 from "./colectibles/Panino2";
import Panino3 from "./colectibles/Panino3";
import Panino4 from "./colectibles/Panino4";

export default function Level3() {
    const map = useMovements();
    const auth = useAuth();
    const [vida, setVida] = useState(3);
    const [speedMenox, setSpeedMenox] = useState(0);
    const [panino, setPanino] = useState(0);
    const [takePanino, setTakePanino] = useState(false);
    const [takePanino2, setTakePanino2] = useState(false);
    const [takePanino3, setTakePanino3] = useState(false);
    const [takePanino4, setTakePanino4] = useState(false);
    const [endLevel, setEndLevel] = useState(false);
    const [checkpoint, setCheckpoint] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showYouLost, setShowYouLost] = useState(false);
    const [gol, setGolg] = useState(0);
    const [golHecho, setGolHecho] = useState(false);
    const [cooldown, setCooldown] = useState(false);
    const [openDoor, setOpenDoor] = useState(false);
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
        setOpenDoor(false);
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
        setVida(vida - 1);
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
        loseLife();
    };

    const dentroDelMapa = () => {
        setFueraMapa(false);
    };

    const notGoal = () => {
        setGolHecho(false);
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

    useEffect(() => {
        if (gol == 2 && panino == 4) {
            setOpenDoor(true);
        }
    }, [gol, panino]);

    const handleSpeedMenox = () => {
        setSpeedMenox(speedMenox + 1);
    };

    const handlePanino = () => {
        setPanino(panino + 1);
        setTakePanino(true);
    };

    const handlePanino2 = () => {
        setPanino(panino + 1);
        setTakePanino2(true);
    };

    const handlePanino3 = () => {
        setPanino(panino + 1);
        setTakePanino3(true);
    };

    const handlePanino4 = () => {
        setPanino(panino + 1);
        setTakePanino4(true);
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
                            <World finishedLevel={finalizoNivel} catchGol={handleGoals} openDoor={openDoor} />
                            <LimiteZone position={[0, -10, 0]} fueraDelMapa={fueraDelMapa} />
                            <AvatarAthlete
                                vida={vida}
                                resetPoint={resetPoint}
                                offTheMap={fueraMapa}
                                dentroDelMapa={dentroDelMapa}
                            />
                            <Portero position={[0.5, 2, 36]} />
                            <Ardilla position={[-15, 3, 0]} savecheckpoint={savecheckpoint} />
                            <SpeedMenox catchSpeed={handleSpeedMenox} changeSpeed={panino}/>
                            <Panino catchPanino={handlePanino} takePanino={takePanino} />
                            <Panino2 catchPanino={handlePanino2} takePanino={takePanino2} />
                            <Panino3 catchPanino={handlePanino3} takePanino={takePanino3} />
                            <Panino4 catchPanino={handlePanino4} takePanino={takePanino4} />
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
                    openDoor={openDoor}
                />
            </KeyboardControls>
        </>
    );
}

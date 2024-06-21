import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import { disconnectSocket, socket } from "../../socket/socket-manager";
import World from "./world/World";
import Controls from "./controls/Controls";
import { useAuth } from "../../context/AuthContext";
import { createuser, readUser } from "../../db/users-collection";
import { useAtom } from "jotai";
import { Players, playersAtom } from "../../components/Players";
import useMovements from "../../utils/key-movements";
import LoadingScreen from "./hud/LoadingScreen";
import Buttons from "./hud/Buttons";
import CharacterHudLv4 from "./hud/CharacterHudLv4";
import AvatarCientific from "./characters/avatar/AvatarCientific";
import AvatarEngineer from "./characters/avatar/AvatarEngineer";
import {
    createcheckpoint,
    editCheckpoint,
    readCheckpoint,
} from "../../db/level4-collection";


export default function Level4() {

    const map = useMovements();
    const auth = useAuth();
    const [life, setLife] = useState(3);
    const [endLevel, setEndLevel] = useState(false);
    const [checkpoint, setCheckpoint] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showYouLost, setShowYouLost] = useState(false);
    const [panino, setPanino] = useState(0);
    const [players] = useAtom(playersAtom); //Recupera toda la información enviada por el socket, Se encuentra sin uso

    // Crea el usuario en la BD
    const saveDataUser = async (valueUser) => {
        await createuser(valueUser);
    };

    // Recupera la informacion del usuario en la BD
    const readDataUser = async (email) => {
        await readUser(email)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }

    const onContinue = () => {
        setShowYouLost(false);
    };

    const endingLevel = () => {
        setEndLevel(true);
    };

    // Conectar usuario por medio de los sockets
    useEffect(()=>{
        socket.emit("player-connected")
    }, [])

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
            // Agregar los recolectables que se vaan a utilizar
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
                            <AvatarCientific />
                            <AvatarEngineer />
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

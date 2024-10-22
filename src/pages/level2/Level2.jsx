import { KeyboardControls, Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import AvatarCientific from "./characters/avatar/AvatarCientific";
import useMovements from "../../utils/key-movements";
import { Perf } from "r3f-perf";
import Buttons from "../level1/View/Buttons";
import { useAuth } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout";
import { createuser, readUser } from "../../db/users-collection";
import Ardilla from "./characters/avatar/Ardilla";
import Curao from "./colectibles/Curao";
import Curao2 from "./colectibles/Curao2";
import Curao3 from "./colectibles/Curao3";
import AvatarGhost from "./characters/enemies/AvatarGhost";
import {
  createcheckpoint,
  editCheckpoint,
  readCheckpoint,
} from "../../db/level2-collection";
import CharacterHudLevel2 from "./hud/CharacterHud";
import LimiteZone from "./world/LimiteZone";

export default function Level2() {
  const map = useMovements();
  const auth = useAuth();
  const [vida, setVida] = useState(3);
  const [endLevel, setEndLevel] = useState(false);
  const [curao, setCurao] = useState(0);
  const [jumpVel, setJumpVel] = useState(4);
  const [checkpoint, setCheckpoint] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [showYouLost, setShowYouLost] = useState(false);
  const [curaoCogio, setCuraoCogio] = useState(false);
  const [curaoCogio1, setCuraoCogio1] = useState(false);
  const [curaoCogio2, setCuraoCogio2] = useState(false);
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
    const checkpointData = await readDataCheckpoint(auth.userLogged.email);
    setVida((prevVida) => prevVida - 1);
    setCuraoCogio(false);
    setCuraoCogio1(false);
    setCuraoCogio2(false);

    if (checkpointData && checkpointData.checkpoint) {
      setCurao(checkpointData.curado);
    } else {
      setCurao(0);
      console.log("No guardaste en el checkpoint :c");
    }
  };

  const actualizarVida = (nuevaVida) => {
    setVida(nuevaVida);
  };

  const fueraDelMapa = () => {
    setFueraMapa(true);
  };

  const dentroDelMapa = () => {
    setFueraMapa(false);
  };

  const handleCurao = () => {
    setCurao((curao) => curao + 1);
    setCuraoCogio(true);
  };

  const handleCurao1 = () => {
    setCurao((curao) => curao + 1);
    setCuraoCogio1(true);
  };

  const handleCurao2 = () => {
    setCurao((curao) => curao + 1);
    setCuraoCogio2(true);
  };

  useEffect(() => {
    if (curao >= 3) {
      setJumpVel(10);
    }
  }, [curao]);

  return (
    <>
      <KeyboardControls map={map}>
        <Buttons />
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
            <Physics debug={false}>
              <World finishedLevel={finalizoNivel} />
              <LimiteZone
                position={[135, -15, -8]}
                fueraDelMapa={fueraDelMapa}
              />
              {/* <AvatarEngineer /> */}
              <AvatarCientific
                jumpHeight={jumpVel}
                vida={vida}
                resetPoint={resetPoint}
                offTheMap={fueraMapa}
                dentroDelMapa={dentroDelMapa}
              />
              <Ardilla position={[-21, 3, 5]} savecheckpoint={savecheckpoint} />
              {/* <Ardilla position={[-15,1.28,5]}/> */}
              <AvatarGhost
                position={[37, -11.6, 60]}
                loseLife={loseLife}
                changeSpeed={curao}
              />
              <AvatarGhost
                position={[41, -11.6, -65]}
                loseLife={loseLife}
                changeSpeed={curao}
              />
              <AvatarGhost
                position={[56.6, -10.5, 1.7]}
                loseLife={loseLife}
                changeSpeed={curao}
              />
              <Curao catchCurao={handleCurao} curaitoCogio={curaoCogio} />
              <Curao2 catchCurao={handleCurao1} curaitoCogio={curaoCogio1} />
              <Curao3 catchCurao={handleCurao2} curaitoCogio={curaoCogio2} />
            </Physics>
          </Suspense>
          <WelcomeText />
          <Controls />
        </Canvas>
        <Loader />
        <CharacterHudLevel2
          vidas={vida}
          curao={curao}
          userInfo={userInfo}
          endLevel={endLevel}
          jumpHeight={jumpVel}
          showYouLost={showYouLost}
          onContinue={onContinue}
        />
      </KeyboardControls>
    </>
  );
}

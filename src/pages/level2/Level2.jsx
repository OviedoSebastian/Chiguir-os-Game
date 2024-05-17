import { KeyboardControls, Loader, OrbitControls } from "@react-three/drei";
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
import CharacterHud from "../hud/CharacterHud";
import { Perf } from "r3f-perf";
import Buttons from "../level1/View/Buttons";
import { useAuth } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout";
import Ardilla from "./characters/avatar/Ardilla";
import Curao from "./colectibles/Curao";
import Curao2 from "./colectibles/Curao2";
import Curao3 from "./colectibles/Curao3";
import AvatarGhost from "./characters/enemies/AvatarGhost";
import AvatarVigilant from "../level1/characters/enemies/AvatarVigilant";

export default function Level2() {
  const map = useMovements();
  const auth = useAuth();
  const [vida, setVida] = useState(3);
  const [jumpVel, setJumpVel] = useState(5);
  const [valueUser, setValuesUser] = useState(null);

  useEffect(() => {
    // para saber todos los valores que se pueden recuperar por medio del
    // inicio de sesion por el correo, imprimir por oconsola lo siguiente console.log(auth.userLogged);
    if (auth.userLogged) {
      const { displayName, email } = auth.userLogged;
      console.log(displayName, email);
      setValuesUser({
        displayName: displayName,
        email: email,
      });
    }
  }, [auth.userLogged]);

  const resetPoint = () => {
    setVida(3);
  };

  const loseLife = () => {
    setVida((prevVida) => prevVida - 1);
  };

  const actualizarVida = (nuevaVida) => {
    setVida(nuevaVida);
  };

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
        <Perf position="top-left" />
        <Suspense fallback={null}>
          <Lights />
          <Environments />
          <Physics debug={false}>
            <World />
            {/* <AvatarEngineer /> */}
            <AvatarCientific
              jumpHeight={jumpVel}
              vida={vida}
              resetPoint={resetPoint}
            />
            <Ardilla position={[-21, 0, 5]} />
            {/* <Ardilla position={[-15,1.28,5]}/> */}
            <AvatarGhost position={[37, -11.6, 60]} />
            <AvatarGhost position={[41, -11.6, -65]} />
            <AvatarGhost position={[56.6, -10.5, 1.7]} />
            <Curao />
            <Curao2 />
            <Curao3 />
          </Physics>
        </Suspense>
        <WelcomeText />
        <Controls />
      </Canvas>
      <Loader>{"Cargando nivel"}</Loader>
      <CharacterHud
        vida={vida}
        vidasPerdidas={vida} // Pendiente a cambiar valores
        actualizarVida={vida} // Pendiente a cambiar valores
      />
    </KeyboardControls>
    </>
  )
}

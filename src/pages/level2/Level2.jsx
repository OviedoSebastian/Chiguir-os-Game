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
import { createuser, readUser } from "../../db/users-collection";
import Raven from "./staging/Raven";

export default function Level2() {
  const map = useMovements();
    const auth = useAuth();
    const [vida, setVida] = useState(3);
    const [jumpVel, setJumpVel] = useState(2);
    const saveDataUser = async (valueUser) =>{
      await createuser(valueUser)
    }
    
    const readDataUser = async (email) =>{
      await readUser(email)
      .then((res) => console.log(res))
      .catch((error) => console.error(error))
    }

    useEffect(() => {
        // para saber todos los valores que se pueden recuperar por medio del 
        // inicio de sesion por el correo, imprimir por oconsola lo siguiente console.log(auth.userLogged);
        if(auth.userLogged){

            const { displayName, email } = auth.userLogged;

            console.log(displayName, email); //Verificar los datos a guardar
            
            saveDataUser({
                displayName: displayName,
                email: email,
            });
            
            readDataUser(email); //Recupera el usuario guardado en la BD 

        }
    }, [auth.userLogged])

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
    
      <KeyboardControls map={map}>
        <Buttons/>
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
                <AvatarCientific />
            </Physics>
          </Suspense>
          <WelcomeText />
          <Controls />
        </Canvas>
        <CharacterHud 
          vidas={vida}
          // radio={radio}
          // potion={potion}
        />
      </KeyboardControls>
    
  );
}

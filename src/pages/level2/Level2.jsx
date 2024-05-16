import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
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
import CharacterHud from "../hud/CharacterHud";
import { Perf } from "r3f-perf";
import Buttons from "../level1/View/Buttons";

export default function Level2() {
  const map = useMovements();

  const actualizarVida = (nuevaVida) => {
    setVida(nuevaVida);
  };
  const [vida, setVida] = useState(50);
  const vidasPerdidas = 2;

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
        <CharacterHud
          vida={vida}
          vidasPerdidas={vidasPerdidas}
          actualizarVida={actualizarVida}
        />
      </KeyboardControls>
    
  );
}

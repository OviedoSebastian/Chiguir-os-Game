import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
  const text1 = "Mapa";
  const text2 = "Checkpoint";
  const text3 = "Recompensas";
  const text4 = "Ingeniero";
  const text5 = "Cientifico";
  const text6 = "Vigilante";
  const text7 = "Controles";

  return (
    <>
      <Float
        speed={10}
        rotationIntensity={0.01}
        floatIntensity={0.5}
        floatingRange={[1, 2]}
        position={[-5.7, 3, 16.8]}
      >
        <Center position={props.position}>
          <Text3D
            rotation={[0, 3.3, 0]}
            font={"/assets/fonts/SquidGamesFont.json"}
            bevelEnabled
            bevelSize={0.005}
            bevelThickness={0.01}
            height={0.1}
            letterSpacing={0.05}
            size={0.2}
          >
            <meshNormalMaterial />
            {text1}
          </Text3D>
        </Center>
      </Float>

      <Float
        speed={10}
        rotationIntensity={0.01}
        floatIntensity={0.5}
        floatingRange={[1, 2]}
        position={[-0.5, 3, 15.9]}
      >
        <Center position={props.position}>
          <Text3D
            rotation={[0, 3.3, 0]}
            font={"/assets/fonts/SquidGamesFont.json"}
            bevelEnabled
            bevelSize={0.005}
            bevelThickness={0.01}
            height={0.1}
            letterSpacing={0.05}
            size={0.2}
          >
            <meshNormalMaterial />
            {text2}
          </Text3D>
        </Center>
      </Float>

      <Float
        speed={10}
        rotationIntensity={0.01}
        floatIntensity={0.5}
        floatingRange={[1, 2]}
        position={[4.5, 3, 15]}
      >
        <Center position={props.position}>
          <Text3D
            rotation={[0, 3.3, 0]}
            font={"/assets/fonts/SquidGamesFont.json"}
            bevelEnabled
            bevelSize={0.005}
            bevelThickness={0.01}
            height={0.1}
            letterSpacing={0.05}
            size={0.2}
          >
            <meshNormalMaterial />
            {text3}
          </Text3D>
        </Center>
      </Float>

      <Float
        speed={10}
        rotationIntensity={0.01}
        floatIntensity={0.5}
        floatingRange={[1, 2]}
        position={[10.2, 3, 14.2]}
      >
        <Center position={props.position}>
          <Text3D
            rotation={[0, 3.3, 0]}
            font={"/assets/fonts/SquidGamesFont.json"}
            bevelEnabled
            bevelSize={0.005}
            bevelThickness={0.01}
            height={0.1}
            letterSpacing={0.05}
            size={0.2}
          >
            <meshNormalMaterial />
            {text4}
          </Text3D>
        </Center>
      </Float>

      <Float
        speed={10}
        rotationIntensity={0.01}
        floatIntensity={0.5}
        floatingRange={[1, 2]}
        position={[15.2, 3, 13.5]}
      >
        <Center position={props.position}>
          <Text3D
            rotation={[0, 3.3, 0]}
            font={"/assets/fonts/SquidGamesFont.json"}
            bevelEnabled
            bevelSize={0.005}
            bevelThickness={0.01}
            height={0.1}
            letterSpacing={0.05}
            size={0.2}
          >
            <meshNormalMaterial />
            {text5}
          </Text3D>
        </Center>
      </Float>

      <Float
        speed={10}
        rotationIntensity={0.01}
        floatIntensity={0.5}
        floatingRange={[1, 2]}
        position={[20.9, 3, 12.6]}
      >
        <Center position={props.position}>
          <Text3D
            rotation={[0, 3.3, 0]}
            font={"/assets/fonts/SquidGamesFont.json"}
            bevelEnabled
            bevelSize={0.005}
            bevelThickness={0.01}
            height={0.1}
            letterSpacing={0.05}
            size={0.2}
          >
            <meshNormalMaterial />
            {text6}
          </Text3D>
        </Center>
      </Float>

      <Float
        speed={10}
        rotationIntensity={0.01}
        floatIntensity={0.5}
        floatingRange={[1, 2]}
        position={[-7.2, 3.2, 6]}
      >
        <Center position={props.position}>
          <Text3D
            rotation={[0, 4.92, 0]}
            font={"/assets/fonts/SquidGamesFont.json"}
            bevelEnabled
            bevelSize={0.005}
            bevelThickness={0.01}
            height={0.1}
            letterSpacing={0.05}
            size={0.2}
          >
            <meshNormalMaterial />
            {text7}
          </Text3D>
        </Center>
      </Float>
    </>
  );
};
export default WelcomeText;

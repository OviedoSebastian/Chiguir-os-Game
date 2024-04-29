import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
    const text = "Nivel 3: Cancha 8 7u7";

    return (
        <Float
            speed={10}
            rotationIntensity={0.01}
            floatIntensity={0.5}
            floatingRange={[1, 4]}
            position={[0.5, 2, 7]}

        >
        <Center
            position={props.position}
        >
            <Text3D
                font={"/assets/fonts/SquidGamesFont.json"}
                bevelEnabled
                bevelSize={0.005}
                bevelThickness={0.01}
                height={0.1}
                letterSpacing={0.05}
                size={0.2}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>
        </Float>
    )
}
export default WelcomeText;

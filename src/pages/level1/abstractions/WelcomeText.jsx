import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
    const text = "Nivel 1: Plazoleta de Ingenio Infinito";

    return (
        <Float
            speed={10}
            rotationIntensity={0.01}
            floatIntensity={0.5}
            floatingRange={[1, 4]}

        >
        <Center
            position={[8, 0, -11.5]}
        >
            <Text3D
                font={"/assets/fonts/PixelSplitter.json"}
                bevelEnabled
                bevelSize={0.005}
                bevelThickness={0.01}
                height={0.1}
                letterSpacing={0.05}
                size={0.08}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>
        </Float>
    )
}
export default WelcomeText;

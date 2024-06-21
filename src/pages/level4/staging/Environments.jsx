import { Environment, Stars, Sky } from "@react-three/drei";

export default function Environments() {
    return (
        <>
        {/* <Stars count={600} /> */}
        <Sky turbidity={8}
    rayleigh={6}
    mieCoefficient={0.005}
    mieDirectionalG={0.8}
    sunPosition={[1, 0, 0]} />
        </>

    )
}
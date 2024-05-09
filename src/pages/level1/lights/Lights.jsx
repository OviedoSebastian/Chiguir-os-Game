import { SpotLight } from "@react-three/drei";
import { Color } from "three";

const Lights = () => {
    return <>
        <ambientLight
        color={"black"}
            intensity={-1000}
        />
        <directionalLight
            castShadow={true}
            position={[0, 0, 0]}
            color={new Color("black")}
            intensity={10}
            // shadow-mapSize = {[100, 100]}
            // shadow-camera-far = {50}
            // shadow-camera-left = {-10}
            // shadow-camera-right = {10}
            // shadow-camera-top = {10}
            // shadow-camera-bottom = {-10}
        />

        <pointLight
            position={[44,5.8,-13.3]}
            intensity={1}
            // angle={2}
            color={"yellow"}
        />
    </>
}
export default Lights;
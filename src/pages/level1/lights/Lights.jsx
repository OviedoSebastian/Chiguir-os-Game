import { Color } from "three";

const Lights = () => {
    return <>
        <ambientLight
            intensity={0.5}
        />
        <directionalLight
            castShadow={true}
            position={[2, 10, 0]}
            color={new Color("#FFF700")}
            intensity={2}
            shadow-mapSize = {[2048, 2048]}
            shadow-camera-far = {50}
            shadow-camera-left = {-10}
            shadow-camera-right = {10}
            shadow-camera-top = {10}
            shadow-camera-bottom = {-10}
        />
    </>
}
export default Lights;
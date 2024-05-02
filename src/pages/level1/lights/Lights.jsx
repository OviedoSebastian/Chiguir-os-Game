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
    </>
}
export default Lights;
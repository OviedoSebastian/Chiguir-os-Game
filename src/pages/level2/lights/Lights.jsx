import { SpotLight } from "@react-three/drei";
import { Color } from "three";

const Lights = () => {
  return (
    <>
      <ambientLight color={"white"} intensity={0.4} />
      <SpotLight
        distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
        position={[0, 15,10]}
      />
    </>
  );
};
export default Lights;

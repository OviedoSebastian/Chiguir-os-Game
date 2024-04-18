import { Cloud, Environment, Sky, Sparkles, Stars } from "@react-three/drei";

export default function Environments() {
  return (
    <>
      {/* <Environment
            files={"/assets/hdris/escene.hdr"}
            preset= {null}
            background= {true}
        /> */}
      <Sky />
      <Stars />
      <Sparkles 
        count={100}
        size={3}
        color={"yellow"}
        scale={2}
      />
      <Cloud 
        bounds={[10, 2, 100]} 
        volume={10} 
        color={"aqua"}
        position={[0, 20, 1]}
        segments={100}
        fade={100}
      />
    </>
  );
}

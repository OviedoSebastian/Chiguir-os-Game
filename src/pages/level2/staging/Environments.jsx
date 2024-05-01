import { Environment, Cloud, Sky, Stars, Sun } from "@react-three/drei";

export default function Environments() {
  return (
    <>
      {/* <Environment
        // files={"/assets/hdris/sky.hdr"}
        preset={null}
        background={false}
        ground={{
          height: 20,
          scale: 300,
          radius: 500,
        }}
      /> */}
      <Sky turbidity={0} rayleigh={0.009} mieCoefficient={0.09} mieDirectionalG={0} azimuth={-180}/>
      <Stars />
      <Cloud
        bounds={[50, 5, 50]}
        volume={15}
        color={"lightpink"}
        position={[0, 30, 1]}
        segments={100}
        fade={200}
      />
    </>
  );
}

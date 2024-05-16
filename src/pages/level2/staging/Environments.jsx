import {
  Environment,
  Cloud,
  Sky,
  Stars,
  Sun,
  Sparkles,
} from "@react-three/drei";

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
      <Sky
        turbidity={0}
        rayleigh={0.009}
        mieCoefficient={0.09}
        mieDirectionalG={0}
        azimuth={-180}
      />
      <Stars />
      <Cloud
        bounds={[50, 5, 50]}
        volume={20}
        color={"lightpink"}
        position={[-70,60, 10]}
        segments={100}
        fade={500}
      />

<Cloud
        bounds={[0.1, 10, 0.1]}
        volume={1}
        color={"white"}
        position={[-22, 17.5, 2.5]}
        segments={100}
        fade={100}
      />
      <Sparkles
        position={[-18.5, 3, 17.5]}
        count={10}
        size={3}
        color={"orange"}
        scale={0.5}
        speed={3}
      />
      <Sparkles
        position={[87, -1.7, 4.2]}
        count={10}
        size={4}
        color={"orange"}
        scale={[0.1, 0.1, 0.1]}
        speed={3}
        opacity={1}
        noise={4}
      />

      <Sparkles
        position={[87.5, -1.8, 2.8]}
        count={10}
        size={4}
        color={"orange"}
        scale={[0.1, 0.1, 0.1]}
        speed={3}
        opacity={1}
        noise={4}
      />

      <Sparkles
        position={[104.2, 5.5, 11.2]}
        count={10}
        size={4}
        color={"orange"}
        scale={[0.1, 0.1, 0.1]}
        speed={3}
        opacity={1}
        noise={4}
      />

<Sparkles
        position={[104.6, 5.5, 9.7]}
        count={10}
        size={4}
        color={"orange"}
        scale={[0.1, 0.1, 0.1]}
        speed={3}
        opacity={1}
        noise={4}
      />
    </>
  );
}

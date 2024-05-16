import { Environment, Cloud, Sky, Stars, Sun } from "@react-three/drei";

export default function Environments() {
  return (
    <>
      <Environment
        files={"/assets/hdris/sky.hdr"}
        preset={null}
        background={false}
        ground={{
          height: 20,
          scale: 300,
          radius: 500,
        }}
      />
      <Cloud
        bounds={[50, 5, 50]}
        volume={15}
        color={"blue"}
        position={[0, 30, 1]}
        segments={100}
        fade={200}
      />
    </>
  );
}

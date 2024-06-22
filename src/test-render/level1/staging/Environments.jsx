import { Environment, Sparkles } from "@react-three/drei";

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

      <Sparkles
        position={[44,5.8,-0.4]}
        count={100}
        size={2}
        color={"yellow"}
        scale={1.5}
      />
    </>
  );
}

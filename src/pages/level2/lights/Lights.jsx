import { SpotLight, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Color, PointLightHelper } from "three";

const Lights = () => {
  const lightRef = useRef(null);
  useHelper(lightRef, PointLightHelper);
  const optionsLight = useMemo(() => {
    return {
      intensitySL: { value: 100, min: 0, max: 100, step: 1 },
      colorSL: { value: "white" },
      positionSL: [23, 3, 4],
    };
  }, []);

  const { intensitySL, colorSL, positionSL } = useControls(
    "Lights",
    optionsLight
  );

  return (
    <>
      <ambientLight color={"white"} intensity={0.2} />
      <pointLight
        ref={lightRef}
        position={[-13.1, 4.5, 1]}
        color="white"
        intensity={10}
      />

      <pointLight
        ref={lightRef}
        position={[-18, 3, 17.5]}
        color={"orange"}
        intensity={10}
        decay={1.5}
      />

      {/* <pointLight
        ref={lightRef}
        position={[22.6, -2, 2.3]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[24, -2, 6.5]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[27, -2, 11]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[32, -2, 14.1]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[32.7, -2, 18]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[36.7, -2, 18]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[40.5, -2, 20.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[42, -2, 24.4]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[39, -2, 26]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[37.8, -2, 29.2]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[39, -2, 33.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[38.6, -2, 37.3]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[36, -2, 40.7]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[33.5, -2, 43.6]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      <pointLight
        ref={lightRef}
        position={[37, -2, 60]}
        color={"white"}
        intensity={10}
        decay={10}
      />

      <pointLight
        ref={lightRef}
        position={[25.6, -2, -0.5]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[26.5, -2, -5.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[30, -2, -7]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[33.8, -2, -5.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[37, -2, -5.5]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[40.2, -2, -5.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[44, -2, -5]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[40.2, -2, -5.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[57, 0.2, 1.7]}
        color={"white"}
        intensity={10}
        decay={10}
      />

      <pointLight
        ref={lightRef}
        position={[77.5, -2, 2.5]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[81.4, -2, 2.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[85, -2, 2.8]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      <pointLight
        ref={lightRef}
        position={[87, -1.2, 3.5]}
        color={"orange"}
        intensity={2}
        decay={1}
      />

      <pointLight
        ref={lightRef}
        position={[104.5, 4.6, 10.3]}
        color={"orange"}
        intensity={1}
        decay={1}
      />

      <pointLight
        ref={lightRef}
        position={[57, -2, -15]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[60, -2, -17]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[62.5, -2, -20.5]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[65, -2, -23.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[64.1, -2, -27.3]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[62.5, -2, -30]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[62.2, -2, -34]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[60, -2, -37.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[58, -2, -41]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[57.5, -2, -45]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[56, -2, -48.8]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[54.5, -2, -51.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[53.8, -1.5, -55]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[51.7, -2, -58.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[49.7, -2, -62.8]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      <pointLight
        ref={lightRef}
        position={[40, -2, -65]}
        color={"white"}
        intensity={10}
        decay={10}
      />

      <pointLight
        ref={lightRef}
        position={[30.8, -2.5, -59]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[28, -2.5, -60.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[25, -2.5, -62]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[21, -2.5, -61]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[18, -2.5, -59.8]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />

      {/* <pointLight
        ref={lightRef}
        position={[15, -2.5, -57.5]}
        color={"#e006ff"}
        intensity={1}
      /> */}

      <pointLight
        ref={lightRef}
        position={[12, -2.5, -56]}
        color={"#e006ff"}
        intensity={1}
        decay={1}
      />
    </>
  );
};
export default Lights;

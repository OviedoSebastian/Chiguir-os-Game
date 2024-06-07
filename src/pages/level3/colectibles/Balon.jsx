import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody, useRigidBody, RapierRigidBody } from "@react-three/rapier";

export default function Balon({ isGol, notIsGoal, gol }) {
  const refRigidBody = useRef();
  const [visible, setVisible] = useState(true);
  const { nodes, materials } = useGLTF("/assets/models/colectables/Balon.glb");
  // const ref = useRef<RapierRigidBody>(null);
  const [balonAudio] = useState(new Audio("/assets/sounds/Balon.mp3"));
  const [positionBalon, setPositionBalon] = useState([1.2, 3, 34]);

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", manifold.solverContactPoint(0));

    if (other.colliderObject.name == "character-capsule-collider") {
      setVisible(true);
      balonAudio.play();
    }
  };

  useEffect(() => {
    console.log("Se hizo el golsito ignorar", isGol);
    
    if (isGol) {
      console.log("me cambie, yei");
      refRigidBody.current?.setTranslation(
            {
                x: 0,
                y: 5,
                z: 7,
            },
            true
        );
        notIsGoal()
    }
  }, [isGol]);

  useEffect(() => {
    console.log("Se hizo el golsito ignorar", isGol);
    
    if (gol == 2) {
      setVisible(false)
    }
  }, [gol]);

  // {[1.2, 3, 7.9]}
  return (
    <>
      {visible ? (
        <RigidBody
          ref={refRigidBody}
          type="dynamic"
          colliders="ball"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="Balon"
          restitution={1}
          position={positionBalon}
          scale={2.2}
        >
          <group dispose={null} >
            <mesh
              geometry={nodes.Balon_1.geometry}
              material={materials.Blanco}
            />
            <mesh
              geometry={nodes.Balon_2.geometry}
              material={materials.Negro}
            />
          </group>


        </RigidBody>
      ) : null}
    </>
  );
}

useGLTF.preload("/assets/models/colectables/Balon.glb");

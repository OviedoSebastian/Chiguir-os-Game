import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { socket } from "../../../socket/socket-manager";

export default function SpeedMenox({ catchObject }) {
  const { nodes, materials } = useGLTF("/assets/models/colectables/speedMenox_less.glb");
  const [speedMenoxSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));
  const [position, setPosition] = useState([-25.2, 1 , 10.3]);
  const [visible, setVisible] = useState(true);
  const refRigidBody = useRef();
  const requestRef = useRef();
  const radius = 0.3;
  const speed = 5;

  const animate = () => {
    if (refRigidBody.current && visible) {
      const elapsedTime = Date.now() / 1000; // Tiempo en segundos
      const angle = elapsedTime * speed;
      const x = Math.sin(angle) * radius;
      const y = Math.cos(angle) * radius;

      // Actualiza la posición y la rotación
      refRigidBody.current.setTranslation(
        {
          x: position[0],
          y: position[1] + y,
          z: position[2],
        },
        true
      );

      refRigidBody.current.setRotation({ x: 0, y: angle, z: 0 }, true);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [visible, position]);

  const onCollisionEnter = ({ manifold, target, other }) => {
    if (other.colliderObject.name === "character-capsule-collider") {
      setVisible(false);
      socket.emit('update-speedmenox', { visible: false });
      speedMenoxSound.play();
      catchObject();
    }
  };

  useEffect(() => {
    // Listener for updates from the server
    socket.on('update-speedmenox', (data) => {
        setVisible(data.visible);
    });

    return () => {
        socket.off('update-speedmenox');
    };
}, []);

  return (
    <>
      {visible ? (
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="SpeedMenox"
          position={position}
        >
          <group dispose={null} ref={refRigidBody}>
            <mesh
              geometry={nodes.geometry_0.geometry}
              material={materials.Material_0}
              position={[-0.002, 0.56, 0.011]}
            />
          </group>
        </RigidBody>
      ) : null}
    </>
  );
}

useGLTF.preload("/assets/models/colectables/speedMenox_less.glb");

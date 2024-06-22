import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { socket } from "../../../socket/socket-manager";

export default function Curao({ catchObject }) {
  const { nodes, materials } = useGLTF("/assets/models/colectables/curao.glb");
  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));
  const [position, setPosition] = useState([-3, 6, -5]);
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

  /*
  useEffect(() => {
    if (curaitoCogio) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [curaitoCogio]);
  */

  const onCollisionEnter = ({ manifold, target, other }) => {
    if ((other.colliderObject.name === "character-capsule-collider")) {
      setVisible(false);
      socket.emit('update-curao', { visible: false });
      curaoSound.play();
      catchObject();
    }
  };

  useEffect(() => {
    // Listener for updates from the server
    socket.on('update-curao', (data) => {
      setVisible(data.visible);
    });

    return () => {
      socket.off('update-curao');
    };
  }, []);

  return (
    <>
      {visible ?
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="Curao"
          position={position}
        >
          <group
            dispose={null}
            ref={refRigidBody}
            rotation={[0, 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geometry_0.geometry}
              material={materials.Material_0}
            />
          </group>
        </RigidBody>
        : null}
    </>
  )
}

useGLTF.preload("/assets/models/colectables/curao.glb");

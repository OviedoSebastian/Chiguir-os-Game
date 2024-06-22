import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from 'three';

export default function Molotov({ props, position, loseLife, direccion, sentido, distancia, isDecrease }) {
  const { nodes, materials } = useGLTF("/assets/models/colectables/molotov.glb");
  const [visible, setVisible] = useState(true);
  const refRigidBody = useRef();
  const [molotovSound] = useState(new Audio("/assets/sounds/QueRico.mp3"));

  const travelDistance = distancia; // Distance to travel before resetting
  const initialPosition = new Vector3(position[0], position[1], position[2]);
  const [speed, setSpeed] = useState(0.8); // Adjust the speed as needed

  const onCollisionEnter = ({ manifold, target, other }) => {
    if (other.colliderObject.name === "character-capsule-collider") {
      molotovSound.play();
      // Resta una vida
      loseLife();
    } else {
      console.log(
        // this rigid body's Object3D
        target.rigidBodyObject,
        " collided with ",
        // the other rigid body's Object3D
        other.rigidBodyObject
      );
    }
  };

  useEffect(() => {
    if(isDecrease === 2) {
      setSpeed(0.5);
    } else if(isDecrease > 3) {
      setSpeed(0.2)
    }
  }, [isDecrease]);

  useFrame(() => {
    if (refRigidBody.current) {
      // Get current position
      const currentPosition = refRigidBody.current.translation();

      // Calculate the distance traveled from the initial position
      let distanceTraveled;
      switch(direccion) {
        case 'x':
          distanceTraveled = currentPosition.x - initialPosition.x;
          break;
        case 'y':
          distanceTraveled = currentPosition.y - initialPosition.y;
          break;
        case 'z':
          distanceTraveled = currentPosition.z - initialPosition.z;
          break;
        default:
          distanceTraveled = currentPosition.x - initialPosition.x; // Default to x direction
      }

      // Check if the Molotov has traveled the specified distance
      if (Math.abs(distanceTraveled) >= travelDistance) {
        // Reset position to initial position
        refRigidBody.current.setTranslation(
          {
            x: initialPosition.x,
            y: initialPosition.y,
            z: initialPosition.z,
          },
          true
        );
      } else {
        // Calculate new position based on the direction and sentido
        let newPosition = new Vector3(currentPosition.x, currentPosition.y, currentPosition.z);
        switch(direccion) {
          case 'x':
            newPosition.x += sentido * speed;
            break;
          case 'y':
            newPosition.y += sentido * speed;
            break;
          case 'z':
            newPosition.z += sentido * speed;
            break;
          default:
            newPosition.x += sentido * speed; // Default to x direction
        }

        // Update the position of the rigid body
        refRigidBody.current.setTranslation(
          {
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z
          },
          true
        );
      }
    }
  });

  return (
    <>
      {visible ? (
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="Molotov"
          position={position}
        >
          <group {...props} dispose={null} ref={refRigidBody}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.cloth}
              scale={0.1}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.bottle}
              scale={0.1}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.label}
              scale={0.1}
            />
          </group>
        </RigidBody>
      ) : null}
    </>
  );
}

useGLTF.preload("/assets/models/colectables/molotov.glb");

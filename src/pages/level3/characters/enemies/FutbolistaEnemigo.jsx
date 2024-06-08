import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function FutbolistaEnemigo({ position, loseLife, isAttack }) {
  const avatarFutbolistaUscRef = useRef();
  const avatarFutbolistaUscBodyRef = useRef();
  const { avatar, setAvatar } = useAvatar();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/avatars/futbolista_usc.glb"
  );
  const lastCollisionTime = useRef(0); // Referencia para almacenar la marca de tiempo de la última colisión

  // refRigidBody.current.rotation.y = Math.cos(clock.getElapsedTime());

  const [silvatoSound] = useState(new Audio("/assets/sounds/silvato.mp3"));

  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const maxDistance = 15; // Maximum distance to move left and right
  const initialPosition = position ? position[0] : 0;
  const [speedJugadorUSC, setSpeedJugadorUSC] = useState(0.4);

  

  //   useFrame(() => {
  //     if (avatarFutbolistaUscBodyRef.current) {
  //       // Get current position
  //       const currentPosition = avatarFutbolistaUscBodyRef.current.translation();

  //       // Calculate new position
  //       let newPositionX = currentPosition.x + direction * speedJugadorUSC;

  //       // Check boundaries and reverse direction if necessary
  //       if (
  //         newPositionX > initialPosition + maxDistance ||
  //         newPositionX < initialPosition - maxDistance
  //       ) {
  //         setDirection(-direction);
  //         newPositionX = currentPosition.x + direction * speedJugadorUSC; // Apply the reverse direction
  //       }

  //       // Update the position of the rigid body
  //       avatarFutbolistaUscBodyRef.current.setTranslation(
  //         {
  //           x: newPositionX,
  //           y: currentPosition.y,
  //           z: currentPosition.z,
  //         },
  //         true
  //       );
  //     }
  //   });


  const onCollisionEnter = ({ manifold, target, other }) => {
    if (other.colliderObject.name == "character-capsule-collider") {
      silvatoSound.play();
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

  return (
    <>
      {isAttack ? (
        <RigidBody
          ref={avatarFutbolistaUscBodyRef}
          type="fixed"
          position={position}
          rotation={[0, Math.PI / 2, 0]}
          onCollisionEnter={(e) => onCollisionEnter(e)}
        >
          <group ref={avatarFutbolistaUscRef} name="Scene">
            <group>
              <mesh
                geometry={nodes.Futbolista2_Body.geometry}
                material={materials.Camiseta_mat}
              />
              <mesh
                geometry={nodes.Futbolista2_Mochito.geometry}
                material={materials.Mochito_mat}
              />
              <mesh
                geometry={nodes.Futbolista2_Shoes.geometry}
                material={materials.Shoes_mat}
              />
              <mesh
                geometry={nodes.Futbolista2_Hair.geometry}
                material={materials.hair_mat}
                position={[0, 0.078, 0]}
                scale={[0.874, 0.933, 1]}
              />
              <mesh
                geometry={nodes.Futbolista2_Hands.geometry}
                material={materials["piel.001"]}
                position={[-0.01, 0.519, -0.017]}
              />
              <mesh
                geometry={nodes.Futbolista2_Head.geometry}
                material={materials.piel}
              />
            </group>
          </group>
        </RigidBody>
      ): null}
    </>

  );
}

useGLTF.preload("/assets/models/avatars/futbolista_usc.glb");

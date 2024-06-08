import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function FutbolistaEnemigo2({
  position,
  loseLife,
  changeSpeed,
  isAttack
}) {
  const avatarFutbolistaUscRef2 = useRef();
  const avatarFutbolistaUscBodyRef2 = useRef();
  const { avatar, setAvatar } = useAvatar();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/avatars/futbolista_usc.glb"
  );
  const lastCollisionTime = useRef(0); // Referencia para almacenar la marca de tiempo de la última colisión

  // refRigidBody.current.rotation.y = Math.cos(clock.getElapsedTime());

  const [soundGhost] = useState(new Audio("/assets/sounds/Boo.mp3"));

  const [speedJugadorUSC, setSpeedJugadorUSC] = useState(1);

  const radius = 15;
  const speed = 1;

  // refRigidBody.current.rotation.y = Math.cos(clock.getElapsedTime());

  useEffect(() => {
    if (changeSpeed === 1) {
      setSpeedJugadorUSC(0.1);
    } else if (changeSpeed === 2) {
      setSpeedJugadorUSC(0.005);
    }
  }, [changeSpeed]);


 /* useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const angle = elapsedTime * speedJugadorUSC;
    const x = Math.cos(angle) * radius;
    avatarFutbolistaUscBodyRef.current.rotation.y = Math.cos(elapsedTime);

    avatarFutbolistaUscBodyRef.current?.setTranslation(
      {
        x: position[0] + x,
        y: position[1],
        z: position[2],
      },
      true
    );
  });*/

  const onCollisionEnter = ({ manifold, target, other }) => {
    if (other.colliderObject.name == "character-capsule-collider") {
      soundGhost.play();
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
      ref={avatarFutbolistaUscBodyRef2}
      type="fixed"
      position={position}
      rotation={[0, Math.PI / 2, 0]}
      onCollisionEnter={(e) => onCollisionEnter(e)}
    >
      <group ref={avatarFutbolistaUscRef2} name="Scene">
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

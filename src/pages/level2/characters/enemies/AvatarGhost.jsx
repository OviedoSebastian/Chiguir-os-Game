import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function AvatarGhost({ position, loseLife }) {
  const avatarGhostRef = useRef();
  const avatarGhostBodyRef = useRef();
  const { avatar, setAvatar } = useAvatar();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/villains/Ghost.glb"
  );
  const lastCollisionTime = useRef(0); // Referencia para almacenar la marca de tiempo de la última colisión
  
  const radius = 3;
  const speed = 2;

  // refRigidBody.current.rotation.y = Math.cos(clock.getElapsedTime());

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const angle = elapsedTime * speed
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius

    avatarGhostRef.current.rotation.y = -angle

    avatarGhostBodyRef.current?.setTranslation({
        x: position[0] + x,
        y: position[1],
        z: position[2] + z
    }, true)
})

  const [runSound] = useState(new Audio("/assets/sounds/Boo.mp3"));

  const onCollisionEnter = ({ manifold, target, other }) => {

    const currentTime = performance.now(); // Obtener la marca de tiempo actual
    const timeSinceLastCollision = currentTime - lastCollisionTime.current;
    if (other.colliderObject.name == "character-capsule-collider" && timeSinceLastCollision > 1000) {
      lastCollisionTime.current = currentTime;
      runSound.play();
      
      // Resta una vida
      loseLife();

      const impulseStrength = 50;
      const direction = { x: 5, y: 2, z: 2 }; // Dirección del impulso, en este caso hacia arriba
      other.rigidBodyObject.applyImpulse({
        x: direction.x * impulseStrength,
        y: direction.y * impulseStrength,
        z: direction.z * impulseStrength
      }, true);

      
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
    <RigidBody
      ref={avatarGhostBodyRef}
      type="fixed"
      position={position}
      onCollisionEnter={(e) => onCollisionEnter(e)}
    >
      <group ref={avatarGhostRef} name="Scene" position-y={10}>
          <group name="Armature" scale={0.5}>
            <mesh
              name="Ghost_Body"
              geometry={nodes.Ghost_Body.geometry}
              material={materials.Ameghost}
              skeleton={nodes.Ghost_Body.skeleton}
            />
            <group name="Ghost_Eyes">
              <mesh
                name="Ghost_Eyes_1"
                geometry={nodes.Ghost_Eyes_1.geometry}
                material={materials["Scene_-_Root"]}
                skeleton={nodes.Ghost_Eyes_1.skeleton}
              />
              <mesh
                name="Ghost_Eyes_2"
                geometry={nodes.Ghost_Eyes_2.geometry}
                material={materials.eyes_material}
                skeleton={nodes.Ghost_Eyes_2.skeleton}
              />
            </group>
            <mesh
              name="Ghost_Hair"
              geometry={nodes.Ghost_Hair.geometry}
              material={materials.Material}
              skeleton={nodes.Ghost_Hair.skeleton}
            />
            <primitive object={nodes.Bone010} />
          </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/villains/Ghost.glb");

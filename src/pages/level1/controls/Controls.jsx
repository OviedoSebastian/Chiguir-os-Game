import { useKeyboardControls } from "@react-three/drei";
import { useAvatar } from "../../../context/AvatarContext";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Controls({props, loseLife}) {

  const { avatar, setAvatar } = useAvatar();
  const [sub, get] = useKeyboardControls();
  const [runSound] = useState(new Audio("/assets/sounds/run.wav"));
  const [sounds, setSounds] = useState({
    run: new Audio("/assets/sounds/run.wav"),
    walk: new Audio("/assets/sounds/walk.wav"),
    jump: new Audio("/assets/sounds/jump.wav"),
    // Agrega más sonidos aquí si es necesario
  });
  const [play, setPlay] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  // const position = avatar.rigidBodyAvatarRef?.translation();

  // Caminar
  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.forward || state.backward || state.leftward || state.rightward,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Walk" : "Idle" });
        if (pressed) {
          sounds.walk.play();
        } else {
          sounds.walk.pause();
        }
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  // Correr
  useEffect(() => {
    const unsubscribe = sub(
      (state) => (state.forward || state.backward || state.leftward || state.rightward) && state.run,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Running" : "Idle" });
        if (pressed) {
          sounds.run.play();
        } else {
          sounds.run.pause();
        }
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  // Saltar
  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.jump && !isJumping,
      () => {
        setAvatar({ ...avatar, animation: "Jump" });
        setIsJumping(true);
        sounds.jump.play();
        setTimeout(() => {
          setAvatar({ ...avatar, animation: "Idle" });
          setIsJumping(false);
        }, 500); // Duración de la animación de salto en milisegundos (1 segundo)
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, isJumping]);


  useEffect(() => {
    if (play) {
      sounds.run.currentTime = 0;
      sounds.run.volume = Math.random()
      sounds.run.play()
    } else {
      sounds.run.pause()
    }
  }, [play]);

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = get();
    if (forward || backward || leftward || rightward) {
      if (avatar.animation === "Walk") {
        sounds.walk.play();
      } else if (avatar.animation === "Running") {
        sounds.run.play();
      }
    } else {
      sounds.walk.pause();
      sounds.run.pause();
    }
  });
  

  // useFrame(() => {
  //   if (avatar.rigidBodyAvatarRef?.translation().y <= -10) {
  //     console.log(avatar.rigidBodyAvatarRef?.translation().y);
              
  //     avatar.rigidBodyAvatarRef.current?.setTranslation(
  //         {
  //             x: 20,
  //             y: 5,
  //             z: -30,
  //         },
  //         false
  //     );
  // }
  // });



  return (
    null
  )
}
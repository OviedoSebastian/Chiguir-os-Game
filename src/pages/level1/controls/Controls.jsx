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
    jump: new Audio("/assets/sounds/jump.wav"),
    // Agrega más sonidos aquí si es necesario
  });
  const [play, setPlay] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  // Caminar
  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.forward || state.backward || state.leftward || state.rightward,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Walk" : "Idle" });
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
    const { forward, backward, leftward, rightward } = get()
    if (forward || backward || leftward || rightward) {
      setPlay(true);
    } else {
      setPlay(false);
    }
    const pressed = get().back;
  })
  return (
    null
  )
}
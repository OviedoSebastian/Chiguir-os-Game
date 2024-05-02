import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useAvatar } from "../../../context/AvatarContext";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Controls({ onJump, onKeyA, onKeyD }) {

  const { avatar, setAvatar } = useAvatar();
  const [sub, get] = useKeyboardControls()
  const [runSound] = useState(new Audio("/assets/sounds/run.wav"))
  const [play, setPlay] = useState(false)
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

  // Caminar
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
        setTimeout(() => {
          setAvatar({ ...avatar, animation: "Idle" });
          setIsJumping(false);
        }, 1000); // Duración de la animación de salto en milisegundos (1 segundo)
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, isJumping]);

  // Cambiar el HUD según se tocan las teclas
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        onJump();
      } else if (event.code === 'KeyA') {
        onKeyA();
      } else if (event.code === 'KeyD') {
        onKeyD();
      }
    };

    // Agregar eventos de escucha para las teclas de espacio (salto), A y D
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // Limpiar los eventos al desmontar el componente
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onJump, onKeyA, onKeyD]);

  useEffect(() => {
    if (play) {
      runSound.currentTime = 0;
      runSound.volume = Math.random()
      runSound.play()
    } else {
      runSound.pause()
    }
  }, [play])

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = get()
    if (forward || backward || leftward || rightward) {
      setPlay(true)

    } else {
      setPlay(false)
    }

    const pressed = get().back
  })

  return (

    null
  )
}
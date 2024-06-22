import { useKeyboardControls } from "@react-three/drei";
import { useAvatar } from "../../../context/AvatarContext";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Controls() {

  const { avatar, setAvatar } = useAvatar();
  const [sub, get] = useKeyboardControls();
  const [sounds, setSounds] = useState({
    run: new Audio("/assets/sounds/run.wav"),
    walk: new Audio("/assets/sounds/walk.wav"),
    jump: new Audio("/assets/sounds/jump.wav"),
  });
  const [play, setPlay] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  // const position = avatar.rigidBodyAvatarRef?.translation();

  // Walk
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

  // Run
  useEffect(() => {
    const unsubscribe = sub(
      (state) => (state.forward || state.backward || state.leftward || state.rightward) && state.run,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Running" : "Idle" });
        if (pressed) {
          sounds.run.play();
        } else {
          setAvatar({ ...avatar, animation: "Walk" });
          sounds.run.pause();
        }
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  // Jump
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

  // Dance
  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.dance,
      () => {
        setAvatar({ ...avatar, animation: "Dance" });
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  useFrame(() => {
    const { forward, backward, leftward, rightward, run, jump } = get();
    if (forward || backward || leftward || rightward || run || jump) {

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


  return (
    null
  );
}
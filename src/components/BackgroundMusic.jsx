import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { VscUnmute, VscMute } from "react-icons/vsc";
import "./stylesComponents.css";

export default function BackgroundMusic() {
    const [backgroundMusic, setBackgroundMusic] = useState({
        login: new Audio("/assets/sounds/Jurassic.wav"),
        level1: new Audio("/assets/sounds/level1Music.wav"),
        level2: new Audio("/assets/sounds/Level2Music2.mp3"),
        level4: new Audio("/assets/sounds/Level4Music.mp3"),
    }); // Estado para almacenar el objeto de audio
    const [isMuted, setIsMuted] = useState(false); // Estado para controlar el silencio
    const location = useLocation();

    useEffect(() => {
        Object.values(backgroundMusic).forEach(sound => sound.pause());
        
        switch (location.pathname) {
            case '/':
                playSound(backgroundMusic.login);
                break;
            case '/chooselevel':
                playSound(backgroundMusic.login);
                break;

            case '/level1':
                playSound(backgroundMusic.level1);
                break;

            case '/level2':
                playSound(backgroundMusic.level2);
                break;

            case '/level4':
                backgroundMusic.level4.loop = true;
                playSound(backgroundMusic.level4);
                break;

            // Agrega más casos según sea necesario

            default:
                break;
        }
    }, [location.pathname]);

    useEffect(() => {
        // Ajustar el volumen según si está silenciado o no
        Object.values(backgroundMusic).forEach(sound => {
            sound.volume = isMuted ? 0 : 1;
        });
    }, [isMuted]);

    const playSound = (sound) => {
        if (!isMuted) {
            // Verificar si el navegador permite la reproducción automática
            const playPromise = sound.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // Ocurrió un error al iniciar la reproducción
                    console.error('Error al iniciar la reproducción:', error);
                });
            }
        }
    };

    const toggleMute = () => {
        setIsMuted(prevState => !prevState);
    };

    

    return (
        <button className="mute-button" onClick={toggleMute}>
            {isMuted ? <VscMute size={40}/> : <VscUnmute size={40}/>}
        </button>
    );
}
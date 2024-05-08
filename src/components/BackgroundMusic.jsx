import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BackgroundMusic() {
    const [backgroundMusic, setBackgroundMusic] = useState({
        login: new Audio("/assets/sounds/loginMusic.wav"),
        level1: new Audio("/assets/sounds/level1Music.wav"),
    }); // Estado para almacenar el objeto de audio
    
    const location = useLocation();
    console.log (location.pathname);

    useEffect(() => {
        Object.values(backgroundMusic).forEach(sound => sound.pause());
        
        switch (location.pathname) {
            case '/':
            case '/chooselevel':
                playSound(backgroundMusic.login);
                break;

            case '/level1':
                playSound(backgroundMusic.level1);
                break;

            // Agrega más casos según sea necesario

            default:
                break;
        }
    }, [location.pathname]);

    const playSound = (sound) => {
        // Verificar si el navegador permite la reproducción automática
        const playPromise = sound.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // La reproducción se inició correctamente
            })
            .catch(error => {
                // Ocurrió un error al iniciar la reproducción
                console.error('Error al iniciar la reproducción:', error);
            });
        }
    };

    return null; // No renderiza ningún elemento visible
}

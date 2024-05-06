// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function BackgroundMusic() {
//     const [backgroundMusic, setBackgroundMusic] = useState(null); // Estado para almacenar el objeto de audio
//     const location = useLocation();
//     console.log (location);
//     useEffect(() => {
//         // Función para cargar y reproducir la música
//         const playMusic = () => {
//             const music = new Audio("/assets/sounds/loginMusic.wav");
//             music.loop = true;
//             music.volume = 0.5;
//             music.play();
//             setBackgroundMusic(music);
//         };

//         // Controla la reproducción de la música según la ruta actual
//         if (!backgroundMusic && !location.pathname.startsWith("/level")) {
//             playMusic(); // Reproducir música si no está reproduciéndose y no es una ruta de nivel
//         }

//         return () => {
//             // Detiene la música cuando se desmonta el componente
//             if (backgroundMusic && !location.pathname.startsWith("/level")) {
//                 backgroundMusic.pause();
//                 setBackgroundMusic(null);
//             }
//         };
//     }, [location.pathname, backgroundMusic]);

//     return null; // No renderiza ningún elemento visible
// }

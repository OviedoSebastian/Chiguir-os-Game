import React, { useEffect, useState, useRef } from "react";
import "./hud.css";
import EndLevel from "./EndLevel";
import YouLost from "./YouLost";

const CharacterHudLv4 = ({ lifes, userInfo, endLevel, showYouLost, onContinue, panino }) => {
    const [displayText, setDisplayText] = useState("");

    const textToShow = 
    "¡Bienvenido al nivel final, la plazoleta! Aquí, junto a tu compañero, deberás recolectar todos los objetos que has visto hasta ahora, superar obstáculos y resolver enigmas para alcanzar tu tan deseada graduación. ¡Buena suerte!";

    const currentIndexRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentIndex = currentIndexRef.current;

            if (currentIndex < textToShow.length) {
                setDisplayText((prevText) => prevText + textToShow[currentIndex]);
                currentIndexRef.current = currentIndex + 1;
            } else {
                clearInterval(intervalId);

                setTimeout(() => {
                    setDisplayText("");
                }, 8000);
            }
        }, 40);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="hud-container">
                {/* Vidas */}
                <div className="hud-item">
                    <img
                        src="./assets/icons/icon_heart.png"
                        alt="laptop"
                        className="hud-icon"
                    />
                    <span className="hud-text">
                        {lifes}/{3}
                    </span>
                </div>

                {/* Paninos */}
                <div className="hud-item">
                    <img
                        src="./assets/icons/icon_panino.png"
                        alt="laptop"
                        className="hud-icon"
                    />
                    <span className="hud-text">
                        {panino}/{4}
                    </span>
                </div>

            </div>

            {/* Integración de la información del usuario */}
            {userInfo && (
                <div id="user-info">
                    <img
                        src={userInfo.photoURL}
                        alt="Usuario"
                        id="user-photo"
                        className="user-photo"
                    />
                    <span id="user-name" className="user-name">
                        {userInfo.displayName.split(" ")[0]}
                    </span>
                </div>
            )}

            {/* Mapa */}
            <div className="hud-map">
                <a href="#large-map" className="map-link">
                    <img src="./assets/images/mapa.png" alt="mapa" className="hud-mapa" />
                </a>
                <span className="map-text">Mapa</span>
            </div>

            {/* Termino el nivel */}
            <div>
                {endLevel && (
                    <EndLevel />
                )}
            </div>

            {/* Perdiste, vuelve empezar */}
            <div>
                {showYouLost && (
                    <YouLost onContinue={onContinue} />
                )}
            </div>

            <div id="large-map" className="overlay">
                <a href="#" className="close-overlay">
                    &times;
                </a>
                <img
                    src="./assets/images/mapa.png"
                    alt="mapa grande"
                    className="large-map"
                />
            </div>

            <div id="large-map" className="overlay">
                <a href="#" className="close-overlay">
                    &times;
                </a>
                <img
                    src="./assets/images/Fondo.png"
                    alt="mapa grande"
                    className="large-map"
                />
            </div>

            {/* Condiciona la renderización del texto animado */}
            {displayText && (
                <div
                    className="text-info"
                    dangerouslySetInnerHTML={{ __html: displayText }}
                ></div>
            )}

        </>
    );
};

export default CharacterHudLv4;

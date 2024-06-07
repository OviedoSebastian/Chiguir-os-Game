import React, { useEffect, useState, useRef } from "react";
import "./hud.css";
import EndLevel from "./EndLevel";
import OpenDoor from "./OpenDoor";
import YouLost from "./YouLost";

const CharacterHudLevel3 = ({ vidas, userInfo, endLevel, showYouLost, onContinue, gol, speedMenox, panino, openDoor }) => {
    const [displayText, setDisplayText] = useState("");

    const textToShow = 
    "¡Bienvenidos al Coliseo! Tu misión es hacer dos (2) goles y recoger cuatro (4) paninos dispersos por el mapa para abrir la puerta de escape. ¡Buena suerte!";

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
                        {vidas}/{3}
                    </span>
                </div>

                {/* Speed Menox */}
                <div className="hud-item">
                    <img
                        src="./assets/icons/icon_speed_menox.png"
                        alt="laptop"
                        className="hud-icon"
                    />
                    <span className="hud-text">
                        {speedMenox}/{2}
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

                {/* Goles*/}
                <div className="hud-item">
                    <img
                        src="./assets/icons/Balon.png"
                        alt="laptop"
                        className="hud-icon"
                    />
                    <span className="hud-text">
                        {gol}/{2}
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
            <div class="hud-map">
                <a href="#large-map" class="map-link">
                    <img src="./assets/images/mapa.png" alt="mapa" class="hud-mapa" />
                </a>
                <span class="map-text">Mapa</span>
            </div>

            {/* Termino el nivel */}
            <div>
                {endLevel && (
                    <EndLevel />
                )}
            </div>

            {/* Puerta abierta */}
            <div>
                {openDoor && (
                    <OpenDoor />
                )}
            </div>

            {/* Perdiste, vuelve empezar */}
            <div>
                {showYouLost && (
                    <YouLost onContinue={onContinue} />
                )}
            </div>

            <div id="large-map" class="overlay">
                <a href="#" class="close-overlay">
                    &times;
                </a>
                <img
                    src="./assets/images/mapa.png"
                    alt="mapa grande"
                    class="large-map"
                />
            </div>

            <div id="large-map" class="overlay">
                <a href="#" class="close-overlay">
                    &times;
                </a>
                <img
                    src="./assets/images/Fondo.png"
                    alt="mapa grande"
                    class="large-map"
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

export default CharacterHudLevel3;

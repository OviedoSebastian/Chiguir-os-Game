import React, { useEffect, useState, useRef } from "react";
import "./hud.css";
import EndLevel from "./EndLevel";
import JumpImpulse from "./JumpImpulse";
import YouLost from "./YouLost";

const CharacterHudLevel2 = ({ vidas, curao, userInfo, endLevel, jumpHeight, showYouLost, onContinue}) => {
  const [displayText, setDisplayText] = useState("");

  const textToShow =
    "¡Bienvenidos al Bosque del Lago Sombrío! <br><br> Recolecta todos los objetos para obtener un impulso de salto que te permitirá saltar entre islas flotantes y llegar al trofeo. <br><br> Lee todos los carteles que hay sobre el mapa, te darán información útil.";
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

        {/* Curao */}
        <div className="hud-item2">
          <img
            src="./assets/icons/curao.png"
            alt="curao"
            className="hud-icon"
          />
          <span className="hud-text">
            {curao}/{3}
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

       {/* Impulso de salto activado */}
      <div>
        {jumpHeight==8 && (
          <JumpImpulse />
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

export default CharacterHudLevel2;

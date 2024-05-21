import React, { useEffect, useState, useRef } from 'react';
import './hud.css';

const CharacterHudLevel2 = ({ vidas, curao }) => {
    const [displayText, setDisplayText] = useState('');
    
    const textToShow = '¡Bienvenidos al Bosque del Lago Sombrío! <br><br> Recolecta todos los objetos para obtener un impulso de salto que te permitirá saltar entre islas flotantes y llegar al trofeo. <br><br> Lee todos los carteles que hay sobre el mapa, te darán información útil.';
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
                    setDisplayText('');
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
                    <img src="./assets/icons/icon_heart.png" alt="laptop" className="hud-icon" />
                    <span className="hud-text">{vidas}/{3}</span>
                </div>

                {/* Curao */}
                <div className="hud-item2">
                    <img src="./assets/icons/curao.png" alt="curao" className="hud-icon" />
                    <span className="hud-text">{curao}/{3}</span>
                </div>
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

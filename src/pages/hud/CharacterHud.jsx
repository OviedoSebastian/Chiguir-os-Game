import React, { useEffect, useState, useRef } from 'react';
import './hud.css';

const CharacterHud = ({ vidas, radio, potion }) => {
    const [displayText, setDisplayText] = useState('');
    const textToShow = 'Holi';
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

                {/* Radio */}
                <div className="hud-item">
                    <img src="./assets/icons/icon_walkietalkie.png" alt="radio" className="hud-icon" />
                    <span className="hud-text">{radio}/{5}</span>
                </div>

                {/* Potion */}
                <div className="hud-item">
                    <img src="./assets/icons/icon_potion.png" alt="potion" className="hud-icon" />
                    <span className="hud-text">{potion}/{5}</span>
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

export default CharacterHud;

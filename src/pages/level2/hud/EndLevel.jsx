import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import './endLevel.css';

const EndLevel = ({ onNextLevel }) => {
    const { width, height } = useWindowSize()
    return (
        <div className="end-level-container">
            <Confetti
                width={width}
                height={height}
            />
            <div className="end-level-message">
                ¡Felicidades, terminaste el nivel!
            </div>
            <button className="end-level-button" onClick={onNextLevel}>
                Siguiente Nivel
            </button>
        </div>
    );
};

export default EndLevel;

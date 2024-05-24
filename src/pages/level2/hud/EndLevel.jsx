import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import './endLevel.css';
import { useNavigate } from 'react-router-dom';

const EndLevel = ({}) => {
    const { width, height } = useWindowSize()

    const navigate = useNavigate()

    const onNextLevel = () => {
        navigate("/level3")
    }

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

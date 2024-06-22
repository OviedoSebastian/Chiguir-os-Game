import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import './endLevel.css';
import { useNavigate } from 'react-router-dom';

const EndLevel = ({}) => {
    const { width, height } = useWindowSize()

    const navigate = useNavigate()

    const onNextLevel = () => {
        navigate("/")
    }

    return (
        <>
        <div >
            <Confetti
                width={width}
                height={height}
            />
        </div>
        <div className="end-level-container">
            
            <div className="end-level-message">
                ¡Felicidades, terminaste el nivel, Gracias por jugar nuestro videojuego!
            </div>
            <button className="end-level-button" onClick={onNextLevel}>
                Inicio
            </button>
        </div>
        </>
    );
};

export default EndLevel;

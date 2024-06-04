import React from 'react';
import './youLost.css';
import { useNavigate } from 'react-router-dom';

const YouLost = ({ onContinue }) => {

    const navigate = useNavigate();

    const continuar = () => {
        onContinue();
    };

    const salir = () => {
        navigate("/chooselevel")
    };
    
    return (
        <div className="you-lost-container">
            <div className="top-section">
                <p>Perdiste, vuelve a empezar.</p>
            </div>
            <div className="bottom-section">
                <button className="continue-button" onClick={continuar}>Continuar</button>
                <button className="exit-button" onClick={salir}>Salir del nivel</button>
            </div>
        </div>
    );
};

export default YouLost;
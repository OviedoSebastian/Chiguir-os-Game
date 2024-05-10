import React from 'react';
import './hud.css';

const CharacterHud = ({ vidas, radio, potion }) => {

    return (
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
    );
};

export default CharacterHud;

import React from 'react';
import { FaStar, FaCrosshairs } from 'react-icons/fa'; // Iconos de vida, recompensas y arma
import './hud.css';

const CharacterHud = ({ vidas, recompensas, laptop, potion, arma }) => {

    return (
        <div className="hud-container">
            {/* Vidas */}
            <div className="hud-item">
            <img src="./assets/icons/icon_heart.png" alt="laptop" className="hud-icon" />
                <span className="hud-text">{vidas}/{3}</span>
            </div>

            {/* Recompensas */}
            <div className="hud-item">
                <FaStar className="hud-icon" />
                <span className="hud-text">{recompensas}</span>
            </div>

            {/* Laptop */}
            <div className="hud-item">
                <img src="./assets/icons/icon_laptop.png" alt="laptop" className="hud-icon" />
                <span className="hud-text">{laptop}/{5}</span>
            </div>

            {/* Potion */}
            <div className="hud-item">
                <img src="./assets/icons/Icon_Beaker.png" alt="potion" className="hud-icon" />
                <span className="hud-text">{potion}/{5}</span>
            </div>

            {/* Arma */}
            <div className="hud-item">
                <FaCrosshairs className="hud-icon" />
                <span className="hud-text">{arma}</span>
            </div>
        </div>
    );
};

export default CharacterHud;

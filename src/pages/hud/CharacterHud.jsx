import React from 'react';
import { FaBookSkull } from 'react-icons/fa6';
import { SiBookstack } from 'react-icons/si';
import './hud.css'; // Estilos del HUD

const CharacterHud = ({ vida, vidasPerdidas }) => {
  // Genera un array con el número de vidas perdidas
  const vidasPerdidasArray = Array.from({ length: vidasPerdidas }, (_, index) => index + 1);

  return (
    <div className="hud-container">
      <div className="hud-icons">
        {/* Vida activa */}
        <SiBookstack className="life-icon" />
        {/* Barra de vida */}
        <div className="health-bar-container">
          {/* Texto "Vida" */}
          <div className="vida-text">Vida</div>
          {/* Barra de vida */}
          <div className="health-bar" style={{ width: `${vida}%` }}></div>
        </div>
      </div>
      {/* Vidas perdidas */}
      <div className="vidas-perdidas-container">
        {vidasPerdidasArray.map(vidasPerdida => (
          <FaBookSkull key={vidasPerdida} className="hud-icon vida-perdida" />
        ))}
      </div>
    </div>
  );
};

export default CharacterHud;

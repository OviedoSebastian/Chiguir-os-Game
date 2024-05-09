import { useNavigate } from "react-router-dom";
import "./styles.css";
import React from "react";

const Buttons = () => {
  // Inicializa el manejo de rutas del proyecto
  const navigate = useNavigate();

  const onHandleButtonBack = () => {
    navigate("/chooselevel");
  };

  const onHandleButtonRestart = () => {
    navigate("/level1");
  };

  return (
    <div className="button-container">
      <div class="button-wrapper">
        <div onClick={onHandleButtonBack} className="button-back">
          {/* <button>Atras</button> */}
          <img src="ruta_de_la_imagen_1" alt="Botón 1" class="button"></img>
        </div>
        <div onClick={onHandleButtonRestart} className="button-restart">
          {/* <button>Reiniciar</button> */}
          <img src="ruta_de_la_imagen_2" alt="Botón 2" class="button"></img>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

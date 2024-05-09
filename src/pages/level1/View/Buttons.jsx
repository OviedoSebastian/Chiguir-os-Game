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
    window.location.reload();
  };
  

  return (
    <div className="button-container">
      <div className="button-wrapper">

        <div onClick={onHandleButtonBack} className="button-levels">
          <img src="/assets/GUI/Home.png" alt="Atras" />
        </div>

        <div onClick={onHandleButtonRestart} className="button-levels">
          <img src="/assets/GUI/Restart.png" alt="Atras" />
        </div>

      </div>
    </div>
  );
};

export default Buttons;

import "./stylesLogin.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const onHandleButtonStart = () => {
        navigate('/chooselevel');
    }

    const onHandleButtonaboutgame = () => {
        navigate('/aboutgame');  // Asegúrate que esta ruta esté bien definida.
    }

    return (
        <div className="container">
            <div className="logo-univalle">
                <img src="/assets/images/gameIcon.webp" alt="Game Icon" />
            </div>
            <div className="title-selection">
                Universidad en Crisis<br></br>
                ¡Supervivencia al Límite!
            </div>
            <div className="button-container">
                    <div onClick = {onHandleButtonStart} className="button-start">
                        <img src="/assets/GUI/Button1.png" alt="Start" />
                        <span className="button-text">Iniciar</span>
                    </div>
                    <div onClick = {onHandleButtonaboutgame} className="button-start">
                        <img src="/assets/GUI/Button2.png" alt="About" />
                        <span className="button-text">Informacion del Juego</span>
                    </div>
            </div>
            <div className="footer">
                &copy; 2024 CHUIGUIR'OS. Todos los derechos reservados.
            </div>
        </div>
    );
}

import "./stylesLogin.css";
import { useNavigate } from "react-router-dom";


export default function Login() {


    // Inicializa el manejo de rutas del proyecto
    const navigate = useNavigate();

    const onHandleButtonStart = () => {
        navigate('/chooselevel');
    }

    const onHandleButtonaboutgame = () => {
        navigate('/level');
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
            <div onClick={onHandleButtonStart} className="button-start">
                <button>Iniciar</button>
            </div>
            <div onClick={onHandleButtonaboutgame} className="button-start">
                <button>Información del juego</button>
            </div>

            <div className="footer-copyright">
                &copy; 2024 CHUIGUIR'OS. Todos los derechos reservados.
            </div>
        </div>
    );

}

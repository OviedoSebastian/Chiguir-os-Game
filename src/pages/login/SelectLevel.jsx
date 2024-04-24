import "./stylesLogin.css";
import { useNavigate } from "react-router-dom";

export default function SelectLevel() {

    // Inicializa el manejo de rutas del proyecto
    const navigate = useNavigate();

    const onHandleButtonStart = (level) => {
        navigate(`/level${level}`);
    }

    return (
        <div className="container">
            <div className="logo-univalle">
                <img src="/assets/images/gameIcon.webp" alt="Game Icon" />
            </div>
            <div className="title-squid-games">
                Selecciona un nivel:
            </div>
            <div className="level-selection">
                <div onClick={() => onHandleButtonStart(1)} className="button-level">
                    <button>Nivel 1</button>
                </div>
                <div onClick={() => onHandleButtonStart(2)} className="button-level">
                    <button>Nivel 2</button>
                </div>
                <div onClick={() => onHandleButtonStart(3)} className="button-level">
                    <button>Nivel 3</button>
                </div>
                <div onClick={() => onHandleButtonStart(4)} className="button-level">
                    <button>Nivel 4</button>
                </div>
            </div>

            <div className="footer-copyright">
                &copy; 2024 CHUIGUIR'OS. Todos los derechos reservados.
            </div>
        </div>
    );

}
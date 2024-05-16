import "./stylesLogin.css";
import { useNavigate } from "react-router-dom";
export default function SelectLevel() {
    const navigate = useNavigate();

    const onHandleButtonStart = (level) => {
        navigate(`/level${level}`);
    }

    const onHandleButtonBack = () => {
        navigate('/');
    }

    return (
        <div className="container">
            <div className="logo-univalle">
                <img src="/assets/GUI/Tittle.png" alt="Game Icon" />
            </div>
            <div className="Niveles">
                Selecciona un nivel:
            </div>
            <div className="level-selection">
                {[1, 2, 3, 4].map((level) => (
                    <div key={level} onClick={() => onHandleButtonStart(level)} className="button-level">
                        <img src="/assets/GUI/Button2.png" alt={`Nivel ${level}`} />
                        <span className="button-text">Nivel {level}</span>
                    </div>
                    
                ))}
                
            </div>
            <div onClick = {onHandleButtonBack} className="button-atras">
                    <img src="/assets/GUI/Atras.png" alt="Atras" />
            </div>
            <div className="footer-copyright">
                &copy; 2024 CHUIGUIR'OS. Todos los derechos reservados.
            </div>
        </div>
    );
}
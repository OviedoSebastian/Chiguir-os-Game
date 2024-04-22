import "./stylesLogin.css";
export default function Login() {
    const onHandleButtonStart = () => {
        console.log("Iniciar Juego");
    }

    return (
        <div className="container">
            <div className="logo-univalle">
                <img src="/assets/images/logo-univalle.png" alt="Logo Universidad del Valle" />
            </div>
            <div className="title-squid-games">
                Bienvenido a<br/>Squid Games
            </div>
            <div onClick={onHandleButtonStart} className="button-start">
                <button>Iniciar</button>
            </div>
        </div>
    );

}
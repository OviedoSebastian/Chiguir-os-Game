import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import "./stylesLogout.css"

export default function Logout(){

    const navigate = useNavigate();
    const auth = useAuth();

    const onHandleButtonLogout = async () => {
        await auth.logout()
        .then((res) => navigate("/"))
        .catch((error) => console.error(error))
    };

    return(
        <div className="button-logout">
            <button onClick={onHandleButtonLogout}>Logout</button>
        </div>
    )
}
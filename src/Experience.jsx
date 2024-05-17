import { AuthProvider } from "./context/AuthContext";
import { AvatarProvider } from "./context/AvatarContext";
import RoutesSquidGames from "./routes/RoutesSquidGames"

const Experience = () => {
    return (
        <AuthProvider>
        <AvatarProvider>
            <RoutesSquidGames />
        </AvatarProvider>
        </AuthProvider>
    )
}

export default Experience;
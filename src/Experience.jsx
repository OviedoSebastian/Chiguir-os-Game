import { AvatarProvider } from "./context/AvatarContext";
import RoutesSquidGames from "./routes/RoutesSquidGames"

const Experience = () => {
    return (
        <AvatarProvider>
            <RoutesSquidGames />
        </AvatarProvider>
    )
}

export default Experience;
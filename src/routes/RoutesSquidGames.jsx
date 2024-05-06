import { BrowserRouter, Route, Routes } from "react-router-dom";
import Level1 from "../pages/level1/Level1";
import Level2 from "../pages/level2/Level2";
import Level3 from "../pages/level3/Level3";
import Level4 from "../pages/level4/Level4";
import Login from "../pages/login/Login";
import SelectLevel from "../pages/login/SelectLevel";
import BackgroundMusic from "../components/BackgroundMusic";

export default function RoutesSquidGames() {
    return (
        <BrowserRouter>
            {/* <BackgroundMusic /> */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chooselevel" element={<SelectLevel />} />
                <Route path="/level1" element={<Level1 />} />
                <Route path="/level2" element={<Level2 />} />
                <Route path="/level3" element={<Level3 />} />
                <Route path="/level4" element={<Level4 />} />
            </Routes>
        </BrowserRouter>
    )
}
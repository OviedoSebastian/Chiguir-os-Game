import "./styles.css";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";

const root = createRoot(document.getElementById("root"));

root.render(
    <Canvas>

        <Experience />

    </Canvas>

    // <Experience 
    //     title = "Squid Games"
    //     subtitle = "3D Web"
    // />
)
import { StrictMode } from "react";
import Experience from "./Experience";
import "./styles.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

console.log(process.env.REACT_APP_API_KEY);

root.render(
    <StrictMode>
        <Experience />
    </StrictMode>
);
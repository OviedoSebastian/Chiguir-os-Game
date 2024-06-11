import { Html } from "@react-three/drei";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Html fullscreen>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                color: 'white',
                fontSize: '24px'
            }}>
                Generando mundo{dots}
            </div>
        </Html>
    );
}

import React, { useState, useEffect } from 'react';
import { Center, Text3D } from '@react-three/drei';

const WelcomeText = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const text = 'Nivel 2\n\nControles:\n- Moverse: WASD\n- Saltar: Barra espaciadora\n- Correr: Mantener presionada la tecla Shift';

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 100000);

        return () => clearTimeout(timeout);
    }, []);

    return isVisible ? (
        <Center position={[-20, 5, 30]}>
            <Text3D
                font={'/assets/fonts/PixelSplitter.json'}
                bevelEnabled
                bevelSize={0.005}
                bevelThickness={0.01}
                height={0.05}
                letterSpacing={0.05}
                size={0.2}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>
    ) : null;
};

export default WelcomeText;

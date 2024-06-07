import React, { useEffect, useState } from 'react';
import './openDoor.css';

const FallMap = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000); // 5000 ms = 5 segundos

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="open-door-container">
            <p>Caíste del mapa, perdiste una vida.</p>
        </div>
    );
};

export default FallMap;

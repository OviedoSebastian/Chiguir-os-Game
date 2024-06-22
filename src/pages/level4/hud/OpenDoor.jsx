import React, { useEffect, useState } from 'react';
import './openDoor.css';

const OpenDoor = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="open-door-container">
            <p>¡Haz abierto la puerta hacía los tuneles secretos, entra ahí para encontrar una escapatoria!.</p>
        </div>
    );
};

export default OpenDoor;

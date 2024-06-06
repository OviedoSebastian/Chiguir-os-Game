import React, { useEffect, useState } from 'react';
import './openDoor.css';

const OpenDoor = () => {
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
            <p>¡La puerta está abierta, puedes escapar!.</p>
        </div>
    );
};

export default OpenDoor;

import React, { useEffect, useState } from 'react';
import './loseLife.css';

const LoseLife = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="open-door-container">
            <p>¡Ups, perdiste una vida, ten más cuidado!.</p>
        </div>
    );
};

export default LoseLife;

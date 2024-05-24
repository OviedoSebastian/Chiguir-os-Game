import React, { useEffect, useState } from 'react';
import './jumpImpulse.css';

const JumpImpulse = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000); // 5000 ms = 5 segundos

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="jump-impulse-container">
            <p>¡Tu impulso de salto ha aumentado! Ahora puedes saltar más alto.</p>
        </div>
    );
};

export default JumpImpulse;

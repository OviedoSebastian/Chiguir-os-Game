import React, { useEffect, useState } from 'react';
import './info1.css';

const Info1 = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="open-door-container">
            <p>¡Recolectar recomenpensas también ayuda disminuir el ataque de los encapuchados!.</p>
        </div>
    );
};

export default Info1;

import React, { createContext, useState, useContext } from 'react';

const PotionContext = createContext();

export const usePotion = () => useContext(PotionContext);

export const PotionProvider = ({ children }) => {
  const [numeroDePociones, setNumeroDePociones] = useState(0);

  const incrementarPociones = () => {
    setNumeroDePociones(numeroDePociones + 1);
  };

  return (
    <PotionContext.Provider value={{ numeroDePociones, incrementarPociones }}>
      {children}
    </PotionContext.Provider>
  );
};

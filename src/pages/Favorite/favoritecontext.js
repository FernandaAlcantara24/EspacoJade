import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const addToFavorites = (product, corSelecionada, tamanhoSelecionado) => {
    setFavoritos((prevFavoritos) => {
      if (!prevFavoritos.some(fav => fav.id === product.id)) {
        return [...prevFavoritos, { ...product, corSelecionada, tamanhoSelecionado }];
      }
      return prevFavoritos;
    });
  };

  const removeFromFavorites = (productId) => {
    setFavoritos((prevFavoritos) => {
      return prevFavoritos.filter(fav => fav.id !== productId);
    });
  };

  return (
    <FavoriteContext.Provider value={{ favoritos, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

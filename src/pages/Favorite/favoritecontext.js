import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const addToFavorites = (product) => {
    setFavoritos((prevFavoritos) => {
      // Verificar se o produto já está nos favoritos
      if (!prevFavoritos.some(fav => fav.id === product.id)) {
        return [...prevFavoritos, product];
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

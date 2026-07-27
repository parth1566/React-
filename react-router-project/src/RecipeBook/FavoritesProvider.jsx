import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    function toggleFavorite(id) {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(f => f !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    }

    function isFavorite(id) {
        return favorites.includes(id);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
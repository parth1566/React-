import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { recipes } from './recipesData';
import { FavoritesContext } from './FavoritesProvider';

const Favorites = () => {
    const { favorites } = useContext(FavoritesContext);

    const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

    return (
        <div>
            <h2>⭐ Favorites</h2>
            {favoriteRecipes.length === 0 ? (
                <p className="empty-msg">No favorites yet — go star something! ⭐</p>
            ) : (
                favoriteRecipes.map((recipe) => (
                    <div className="recipe-card" key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <p className="recipe-meta">⏱️ {recipe.time} · {recipe.difficulty}</p>
                        <Link to={`/recipes/${recipe.id}`}>View recipe →</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default Favorites;
import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { recipes } from './recipesData';
import { useContext } from 'react';
import { FavoritesContext } from './FavoritesProvider';

const RecipeDetail = () => {
    const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
    const { id } = useParams();
    const recipe = recipes.find(r => r.id === Number(id));

    if (!recipe) {
        return <h2>Recipe not found 🍳</h2>;
    }

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p>⏱️ {recipe.time} · {recipe.difficulty}</p>
            <button onClick={() => toggleFavorite(recipe.id)}>
    {isFavorite(recipe.id) ? "⭐ Favorited" : "☆ Add to favorites"}
</button>

            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>

            <h3>Steps</h3>
            <p>{recipe.steps}</p>

            <Link to="/recipes">← Back to recipes</Link>
        </div>
    );
};

export default RecipeDetail;
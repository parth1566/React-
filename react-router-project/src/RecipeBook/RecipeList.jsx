import React from 'react'
import { recipes } from './recipesData';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  return (
    <div className='recipe-card'>
      <h2>🍳 Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <p className='recipe-meta'>⏱️ {recipe.time} · {recipe.difficulty}</p>
          <Link to={`/recipes/${recipe.id}`}>View recipe →</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './RecipeBook.css'

const RecipeLayout = () => {
  return (
   <div className='recipe-app'>
    <nav className="recipe-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
    </nav>
    <hr />
    <Outlet />
</div>
  )
}

export default RecipeLayout

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipeLayout from './RecipeBook/RecipeLayout';
import Home from './RecipeBook/Home';
import RecipeList from './RecipeBook/RecipeList';
import RecipeDetail from './RecipeBook/RecipeDetail';
import Favorites from './RecipeBook/Favorites';
import FavoritesProvider from './RecipeBook/FavoritesProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <RecipeList /> },
      { path: "recipes/:id", element: <RecipeDetail /> },
      { path: "favorites", element: <Favorites /> },
      { path: "*", element: <h2>404 — Recipe not found 🍳</h2> },
    ],
  },
]);

function App() {
  return <FavoritesProvider><RouterProvider router={router} /></FavoritesProvider>;
}

export default App;
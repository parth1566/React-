import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/about');
    }
  return (
    <div className="page home-page">
      <h1>🏠 Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
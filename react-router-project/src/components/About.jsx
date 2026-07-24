import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
    function handleClick() {
        navigate('/dashboard')
    }
  return (
    <div className="page about-page">
      <h1>ℹ️ About Page</h1>
      <p>Everything about us lives here.</p>
      <button onClick={handleClick}>  
        Move to Dashboard
      </button>
    </div>
  )
}

export default About
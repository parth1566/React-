import { useState } from 'react'


function App() {

  function handleClick() {
    alert("I am clicked");
  }

  function handleMouseOver() {
    alert("Welcome to para")
  }
  
  function handleInputChange(e) {
    //console.log("Value changed in Input")
    console.log("Value till now", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Confirm to submit form ?")
  }

  return (
    <div>
        <button onClick={() => alert("Button clicked")}>
          Click me
        </button>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form> */}
    {/* <p onMouseOver={handleMouseOver} style={{border : "1px solid blue"}}> 
      I am a Para
    </p>

    <button onClick={handleClick}>
      Click Me
    </button> */}
    </div>
  )
}

export default App

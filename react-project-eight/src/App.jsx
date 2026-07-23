import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const[count, setCount] = useState(0);
  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated list
  
  //variation : 1
  //runs on every render
  useEffect(() => {
  alert("I wil run on each render");
  })
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
      Click me 
      </button>
      <br />
      Count is: {count}
    </div>
    
  )
}

export default App

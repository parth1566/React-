import Card from './Components/Card'
import './App.css'
import { useState } from 'react'
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div> 
      <Button handleClick = {handleClick} 
      text = "Click me">
        <h1>{count}</h1>
      </Button>
      {/* <Card name = "Parth Sharma">
      <h1>React Js</h1>
      <p>Trying to be consistent in this</p>
      <p>Will complete this series soon</p>
      </Card>
      <Card children = "Hello">
        Hi, How are u? 
      </Card> */}
    </div>
  )
}

export default App

import { useState } from 'react'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  const[name, setName] = useState(" ");
  return (
    <div>
      <Card title = "Card1" name = {name} setName = {setName}/>
      <Card title = "Card2" name = {name} setName = {setName}/>
      {/* <p>I am inside Parent Component and value of name is</p> */}
    </div>
  )
}

export default App

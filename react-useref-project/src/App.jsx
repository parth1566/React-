import { useState, useEffect, useRef } from 'react'


function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef();

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count + 1);
  }

  // it runs on every render
  useEffect(() => {
    console.log("I run on every render");
  })
  

  function handleChangeColor() {
    btnRef.current.style.backgroundColor = "Blue";
  }

  return (
    <>
      <div>
        <button 
        ref={btnRef}
        onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <br />

      <button onClick={handleChangeColor}>
        Change color of 1st button
      </button>
      <br />
      <br />

      <div>
        Count : {count}
      </div>
    </>
  )
}

export default App

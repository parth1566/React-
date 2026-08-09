import { useMemo, useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside expensive task")
    for(let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  let doubleValue =  useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <div>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <br /> <br />

        <div>
          Count: {count}
        </div>
        <br/><br />

        <input 
          type='number'
          placeholder='Enter number...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br /><br />

        <div>
          Double: {doubleValue}
        </div>

        
      </div>
    </>
  )
}

export default App

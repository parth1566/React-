import React, { useState } from 'react'

const ExpensiveComponent = () => {

    const [count, setCount] = useState(0);
    const[text, setText] = useState("");

    const expensiveCalculation = () => {
        console.log("Running Expensive Calculation...");
        let result = 0;
        for(let i = 0; i < 10000000000; i++) {
            result += i;
        }
        return result;
    }

  return (
    <div>
        <input type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type something'
        />

        <p>Expensive Calculation Result:
            {expensiveCalculation()}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
      
    </div>
  )
}

export default ExpensiveComponent

import { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
 
  const [count, setCount] = useState(0);

  

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
    <div>
      Count: {count}
    </div>

    <br />

    <div>
      <button onClick={(handleClick)}>Increase</button>
    </div>

    <br />

    <div>
      <ChildComponent 
      buttonName = "Click me"
      handleClick= {handleClick}
      />
    </div>
    </>
  )
}

export default App

import { useState, useEffect, useRef } from 'react'


function App() {

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }


  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncrement() {
  //   val.current = val.current + 1;
  //   console.log("Value of val: ", val.current);
  //   setCount(count + 1);
  // }

  // // it runs on every render
  // useEffect(() => {
  //   console.log("I run on every render");
  // })
  

  // function handleChangeColor() {
  //   btnRef.current.style.backgroundColor = "Blue";
  // }

  return (
    <>
      <div>
        <h1>Stopwatch: {time} seconds</h1>
        <button onClick={startTimer}>
          Start
        </button>
        <br /><br />

        <button onClick={stopTimer}>
          Stop
        </button>
        <br /><br />

        <button onClick={resetTimer}>
          Reset
        </button>
      </div>















      {/* <div>
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
      </div> */}
    </>
  )
}

export default App

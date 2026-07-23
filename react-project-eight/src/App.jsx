import { useEffectEvent } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponennt';

function App() {
  // const[count, setCount] = useState(0);
  // const[total, setTotal] = useState(1);
  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated list
  
  //variation : 1
  //runs on every render
  // useEffect(() => {
  // alert("I wil run on each render");
  // })

  //variation: 2
  //that runs on only first render
    // useEffect(() => {
    // alert("I wil run on only first render")
    // }, [])

    //variation: 3
    // useEffect(() => {
    //   alert("I will run everytime when count is updated")
    // }, [count])

    //variation: 4
    //multiple dependencies
    // useEffect(() => {
    //   alert("I will run everytime when count/ total is updated")
    // }, [count, total])

    //variation: 5
    //let's add a cleanup function
    // useEffect(() => {
    //   alert("Count is updated")
    
    //   return () => {
    //     alert("count is unmounted from UI")
    //   }
    // }, [count])
    


  // function handleClickCount() {
  //   setCount(count + 1);
    
  // }

  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }

  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/>   */}
      <MultiEffectComponent/>
      {/* <button onClick={handleClickCount}>
        update count     
      </button>
      <br />
      Count is: {count}
      <br />
      <button onClick={handleClickTotal}>
        update Total
      </button>
      <br />
      Total is: {total} */}
    </div>
    
  )
}

export default App

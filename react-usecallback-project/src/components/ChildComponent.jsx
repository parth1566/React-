import React from 'react'

const ChildComponent = React.memo((props) => {

    console.log("Child component go re-rendered again");
    
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
});

export default ChildComponent
 
//React.memo -> wrap -> component -> component re-render will only work when props change otherwise it will not re-render

//If you are sending a function, then react.memo won't be able to save you from re-rendering
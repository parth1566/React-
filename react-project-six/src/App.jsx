import { useState } from 'react'
import LoginBtn from '../components/LoginBtn'
import LogoutBtn from '../components/LogoutBtn'

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

    if(!isLoggedIn) {
      return(
        <LoginBtn/>
      )
    }

 
    return(
      <div>
        <h1>Welcome to ICC</h1>
        <div>
          {isLoggedIn && <LogoutBtn/>}
        </div>
      </div>
    )



    // <div>
    //   {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    // </div>

    // if(isLoggedIn) {
    //   return (
    //     <LogoutBtn/>
    //   )
    // } else {
    //   return(
    //     <LoginBtn/>
    //   )
}

export default App

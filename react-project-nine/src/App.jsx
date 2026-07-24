import { createContext, useState } from 'react'
import ChildA from './components/ChildA';
import './App.css'

// Step 1: create context
//const UserContext = createContext();
// Step 2: wrap all the child inside a provider
// Step 3: pass value
// Step 4: consume the data inside consumer


const ThemeContext = createContext();

function App() {
  // const[user, setUser] = useState({name: "Parth"});
  const[theme, setTheme] = useState('light');
  return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor: theme === 'light' ? 'beige' : 'black'}}>
           <ChildA/>
        </div>
      </ThemeContext.Provider>




    // <div>
    //   <UserContext.Provider value={user}>
    //     <ChildA/>
    //   </UserContext.Provider>
    // </div>
  )
}

export default App
//export {UserContext}
export {ThemeContext}
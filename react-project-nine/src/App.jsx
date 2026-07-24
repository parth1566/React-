import { createContext, useState } from 'react'
import ChildA from './components/ChildA';

// Step 1: create context
const UserContext = createContext();
// Step 2: wrap all the child inside a provider
// Step 3: pass value
// Step 4: consume the data inside consumer

function App() {
  const[user, setUser] = useState({name: "Parth"});

  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}
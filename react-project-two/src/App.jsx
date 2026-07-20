import UserCard from "./components/UserCard";
import mohit from "./assets/Mohit.png";
import rohit from "./assets/Rohit.png";
import abhi from "./assets/Abhi.png";

 function App() {

  return (
    <div className= "container" >
      <UserCard name = "Mohit Sharma" image = {mohit}/>
      <UserCard name = "Rohit Sharma" image = {rohit}/>
      <UserCard name = "Abhishek Sharma" image = {abhi}/>
    </div>
  )
}

export default App

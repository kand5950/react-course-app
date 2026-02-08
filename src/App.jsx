
import './App.css'

//COMPONENT = Function that returns JSX
function Greeting({name, age}){
  return <h1>Hello, I am {name}, I am {age} years old</h1>
}

function App() {

  // const name = getName();
  // const age = 24;

  return <div>
    <Greeting name={"Pedro"} age={24}/>
    <Greeting name={"Jack"}/>
    <Greeting name={"Jess"}/>
    <Greeting name={"Bane"}/>
    </div>;
}

// function getName() {
//   return "Jake"
// }



export default App

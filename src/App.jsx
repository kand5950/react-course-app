
import './App.css'

//COMPONENT = Function that returns JSX
function Greeting(){
  return <h1>Hello, I am Pedro!</h1>
}

function App() {

  // const name = getName();
  // const age = 24;

  return <div>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
    </div>;
}

// function getName() {
//   return "Jake"
// }



export default App


import './App.css'

//COMPONENT = Function that returns JSX
function Greeting({name, age}){
  return <h1>Hello, I am {name}, I am {age} years old</h1>
}

function App() {
  const showGreeting = false;

  return <div>
    {showGreeting ? (<Greeting name={"Pedro"} age={24}/>) : (<button>Click Me</button>)}
    </div>;
}



export default App

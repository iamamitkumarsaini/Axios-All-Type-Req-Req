import logo from './logo.svg';
import './App.css';
import ShowTasks from "./components/ShowTasks";
import Todo from "./components/Todo"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>Todo App</h2>
       <div>
        <Todo/>
        <ShowTasks/>
       </div>
      </header>
    </div>
  );
}

export default App;

// I used JSON server in this Assignment and localHost port used is 3004 because
// at localhost 3000 (default) my React app is running so I change the json server port
// as 3004 to avoide the clash between react app and json server. so please take care of that.
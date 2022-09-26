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

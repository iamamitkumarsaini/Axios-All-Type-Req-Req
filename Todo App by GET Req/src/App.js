import logo from './logo.svg';
import './App.css';
import GetTodo from "./components/GetTodo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>Simple Todo App</h2>
       <GetTodo/>
      </header>
    </div>
  );
}

export default App;

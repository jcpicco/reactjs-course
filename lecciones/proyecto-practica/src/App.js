/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import GreetingClass from './components/pure/greetingClass';
import GreetingFunction from './components/pure/greetingFunction';
import TaskListComponent from './components/container/TaskListComponent';
/* eslint-enable */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Componente propio greeting.jsx con propiedades */}
          {/* <GreetingClass name="Juanma"></Greeting> */}
          {/* Componente propio greetingFunction.jsx con propiedades */}
          {/* <GreetingFunction name="Juanma"></GreetingFunction> */}
          {/* Componente lista de tasks */}
          <TaskListComponent></TaskListComponent>
        </p>
      </header>
    </div>
  );
}

export default App;
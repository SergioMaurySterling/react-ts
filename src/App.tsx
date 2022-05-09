import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimePadre } from './components/TimePadre';
import { ContadorRed } from './components/ContadorRed';

function App() {
  return (
    <div>
      <h1>React + TypeScript</h1>
      <hr />
      <h3>useState</h3>
      <hr />
      <Counter />
      <Usuario />
      <hr />
      <h3>useEffect - useRef</h3>
      <hr />
      <TimePadre />
      <hr />
      <h3>useReducer</h3>
      <hr />
      <ContadorRed />
    </div>
  );
}

export default App;

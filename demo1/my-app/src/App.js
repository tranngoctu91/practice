import logo from "./logo.svg";

import "./App.css";
import Toggle from "./Tooggles/Toggle";
import Counter from "./Counters/Counter";
import Game from "./Tictactoe/Game";

function App() {
  return (
    <div className="App">
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      <Game></Game>
    </div>
  );
}

export default App;

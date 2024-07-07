import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Start react";
  function fullName(firstName, lastName) {
    return `${firstName} - ${lastName}`;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {fullName("tu", "tran")}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

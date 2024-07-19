import logo from "./logo.svg";
import "./App.css";
import Photos from "./components/photo/Photos";

function App() {
  const name = "Start react";
  function fullName(firstName, lastName) {
    return `${firstName} - ${lastName}`;
  }
  return (
    <div className="App">
      <Photos></Photos>
    </div>
  );
}

export default App;

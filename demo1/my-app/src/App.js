import logo from "./logo.svg";
import "./App.css";
import Card from "./card/Card";

function App() {
  const name = "Start react";
  function fullName(firstName, lastName) {
    return `${firstName} - ${lastName}`;
  }
  return (
    <div>
      <Card></Card>
    </div>
  );
}

export default App;

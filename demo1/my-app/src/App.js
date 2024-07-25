import logo from "./logo.svg";
import "./App.css";
import Photos from "./components/photo/Photos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewsRDC from "./components/news/HackerNewsRDC";

function App() {
  const name = "Start react";
  function fullName(firstName, lastName) {
    return `${firstName} - ${lastName}`;
  }
  return (
    <div className="App">
      {/* <Photos></Photos> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      <HackerNewsRDC></HackerNewsRDC>
    </div>
  );
}

export default App;

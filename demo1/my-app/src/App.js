import "./App.css";
import Feature from "./Feature.js";

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      {numbers.map((s) => (
        <Feature key={s} title={`title - ${s}`} content={`cotent - ${s}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A porro,
            harum in quidem aliquam architecto quisquam consequuntur, maxime
            facere itaque ea. Perferendis, consequatur ipsa aliquid ea
            laudantium maiores at vel.
          </p>
        </Feature>
      ))}
    </div>
  );
}

export default App;

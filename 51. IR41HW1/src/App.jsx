import { useState } from "react";

export default function App() {
  function Counter() {
    const [counter, setCounter] = useState(0);
    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    );
  }

  function ToggleBackground() {
    const [background, setBackground] = useState("LightBlue");
    return (
      <div>
        <button
          style={{ background: `${background}` }}
          onClick={() =>
            setBackground(background === "LightBlue" ? "Gray" : "LightBlue")
          }
        >
          Toggle Background
        </button>
      </div>
    );
  }

  function MessageShowHide() {
    const [visibility, setVisibility] = useState(false);
    const message = "This is a toggleable message!";
    return (
      <div>
        <button onClick={() => setVisibility(!visibility)}>
          {visibility ? "Hide Message" : "Show Message"}
        </button>
        <p>{visibility ? message : ""}</p>
      </div>
    );
  }

  function ToggleColor() {
    const [color, setColor] = useState("Red");
    return (
      <div>
        <p style={{ color: `${color}` }}>Text Color Toggler</p>
        <button onClick={() => setColor(color === "Red" ? "Green" : "Red")}>
          Toggle Color
        </button>
      </div>
    );
  }

  function ShowSelectedFruit() {
    const [selectedFruit, setSelectedFruit] = useState("");
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

    return (
      <div>
        <h3>Select a Fruit</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li
              key={index}
              onClick={() => setSelectedFruit(fruit)}
              style={{ cursor: "pointer" }}
            >
              {fruit}
            </li>
          ))}
        </ul>
        {selectedFruit && <p>You selected: {selectedFruit}</p>}
      </div>
    );
  }

  return (
    <main>
      <Counter />
      <hr />
      <ToggleBackground />
      <hr />
      <MessageShowHide />
      <hr />
      <ToggleColor />
      <hr />
      <ShowSelectedFruit />
    </main>
  );
}

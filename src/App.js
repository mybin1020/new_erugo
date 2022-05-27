import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    // setCounter(counter + 1);
    setCounter((current) => current + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test입니다</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          뭐가 바뀐거야...
        </a>
        <div>
          <h3>Total click:{counter}</h3>
          <button onClick={onClick}>Click me!</button>
        </div>
      </header>
    </div>
  );
}

export default App;

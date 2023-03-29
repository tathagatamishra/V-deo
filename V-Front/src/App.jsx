import { useState } from "react";
import "./App.css";

const arrayDivs = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="Header">
        {arrayDivs.map((num) => (
          <div className="VideoCards">{num}</div>
        ))}
      </div>
      <div className="Body">
        <div className="Description"></div>
        <div className="Video"></div>
        <div className="Comment"></div>
      </div>
      <form className="Footer">
        <input className="Search" type="text" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="Btn">Search</button>
      </form>
    </div>
  );
}

export default App;

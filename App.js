import React, { useState } from "react";
import "./styles.css";
import Child from "./Child";
import ChildData from "./ChildData";
import ChilComponent from "./ChildComponent";
import DisplayTime from "./DisplayTime";
import Counter from "./Counter";
import ReactForm from './components/Form'

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCallback = (childname) => {
    setName({ childname });
    alert("");
  };

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      {/* <h1>This is Parent Component</h1>
      <ul>
        <li>
          <Child firstNameColor="green" lastNameColor="yellow" />
        </li>
      </ul>
      <ChildData parentCallback={handleCallback} />
      {JSON.stringify(name)} */}

      {/* <ChilComponent count={count} onClick={handleCount} /> */}

      {/* <DisplayTime />

      <Counter /> */}

      <ReactForm/>
    </div>
  );
}

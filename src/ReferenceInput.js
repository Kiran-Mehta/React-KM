import { useEffect, useRef, useState } from "react";

export default function ReferenceInput() {
  const [num, setNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("123");
    console.log(inputOne.current);
    inputOne.current.style.width = "500px";
  };

  const getTextBox = () => {
    console.log("Hello world");
    console.log(inputTwo.current);
  };

  return (
    <div>
      <input
        ref={inputOne}
        value={num}
        type="number"
        onChange={(e) => setNum(e.target.value)}
        style={{ width: "300px" }}
      />

      <input
        ref={inputTwo}
        value={num}
        type="text"
        onChange={(e) => setNum(e.target.value)}
      />

      <h3>Value is : {num}</h3>

      <button onClick={() => getNumBox()}>Rupees</button>

      <button onClick={() => getTextBox()}>Dollars</button>
    </div>
  );
}

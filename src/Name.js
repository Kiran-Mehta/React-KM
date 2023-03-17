import { useState } from "react";
import { UserContext } from "./App";

export default function Name() {
  const [name, setName] = useState("Kiran");

  const handleClick = () => {
    setName("Kiran Mehta");
  };
  return (
    <div>
      {/* {name} */}

      <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
      
      {/* <button onClick={handleClick}>Change name</button> */}
    </div>
  );
}

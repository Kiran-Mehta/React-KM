import { useState } from "react";
import Button from "./Button";
import DisplayCounter from "./DisplayCounter";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <DisplayCounter count={count} />
      <Button onClick={onClick} label={"Click Me"} />
    </div>
  );
}

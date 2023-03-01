import { useEffect, useRef, useState } from "react";

export default function ReferenceCount() {
  const [isCount, setIsCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, []); // ITS create mutable variable which not re render our component

  return (
    <div>
      <h6>Count is here:{isCount}</h6>
      <button type="button" onClick={(e) => setIsCount(isCount + 1)}>
        Click to see count
      </button>
      <p>Count is {count.current}</p>
    </div>
  );
}

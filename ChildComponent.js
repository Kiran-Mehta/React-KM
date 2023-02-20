import { useEffect, useState } from "react";

export default function ChilComponent({ count, onClick }) {
  const [childCount, setChildCount] = useState(count);

  useEffect(() => {
    setChildCount(count);
  }, [count]);

  return (
    <div className="">
      <button type="button" onClick={onClick}>
        {childCount}
      </button>
    </div>
  );
}

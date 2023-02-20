import React, { useEffect, useState } from "react";
import Time from "./Time";

export default function DisplayTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const newInterval = setInterval(() => {
      setDate(today, 10000);
    });

    return () => {
      clearInterval(newInterval);
    };
  });

  return (
    <div>
      <p>
        Time is: <Time date={date} />
      </p>
    </div>
  );
}

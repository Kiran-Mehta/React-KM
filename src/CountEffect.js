import { useEffect, useState } from "react";

export default function ChilDComponent() {
  const [count, setCount] = useState(0);



 useEffect(() => {
   document.title=`You clicked ${count} times`;

   console.log(`You clicked ${count} times`);

   return ()=>{
   console.log(`You clicked for testing times`);
   //document.title=`You clicked ${count} times`;
   }
  },[count]);

  //console.log( typeof effect);

  return (
    <div >
    <p>Count: {count}</p>
      <button type="button" onClick={()=>setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
import React, { useState, useMemo} from "react";

// function UseMemo() {
//   const [msg, setMsg] = useState("hello");
//   const reverseMsg = () => {
//     return msg.split("").reverse().join("");
//   }
//   console.log("memo render");
//   return (
//     <div>
//       <h1>{msg}</h1>
//       <h1>{reverseMsg()}</h1>
//       <h1>{reverseMsg()}</h1>
//       <button onClick={() => setMsg("Hello")}>Change Msg</button>
//     </div>
//   );
// }


function UseMemo() {
    const [msg, setMsg] = useState("hello");
    
    const reverseMsg = useMemo(() => {
        console.log(`inside usememo, ${msg}`);
        return msg.split("").reverse().join("");
      },[]); //msg is dependency
    
   
    return (
      <div>
        <h1>{msg}</h1>
        {/* <h1>{reverseMsg}</h1> */}
        <h1>{reverseMsg}</h1>
        <button onClick={() => setMsg("Hello")}>Change Msg</button>
      </div>
    );
  }

export default UseMemo;
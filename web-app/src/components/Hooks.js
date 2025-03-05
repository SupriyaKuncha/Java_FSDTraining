import React, { useEffect, useState } from "react";

function Hooks(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("re-rendered");
    });


  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>

      </div>
    </>
  );
}
export default Hooks;
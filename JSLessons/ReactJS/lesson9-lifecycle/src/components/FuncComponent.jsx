// import React,{useState,useEffect} from 'react'

// const FuncComponent = () => {
//     const [item,action] = useState('salam');
//     useEffect(
//         ()=>{
//             console.log("running...");
//             document.querySelector('p').style.color='red';
            
//         },[item]
//     )
//   return (
//     <div>
//         <p>{item}</p>

//         <button onClick={()=>action("Hello")}>new one</button>

//     </div>
//   )
// }

// export default FuncComponent

import React, { useState, useEffect } from 'react';

function FuncComponent() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default FuncComponent
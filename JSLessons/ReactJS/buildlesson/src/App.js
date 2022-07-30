import { useState } from "react";


function App() {
  const [count,setCount] = useState(0);
   const increment =()=>{
    setCount(count+1);
   }
   const decrement =()=>{
    if (count>0) {
    setCount(count-1);
      
    }
   }
  return (
    <div className="App">
     <h1 className="text-center">React Counter Project</h1>
     <div className="container mt-5">
      <button className="btn btn-outline-danger mx-3" onClick={decrement}>-1</button>
      <span>{count}</span>
      <button className="btn btn-outline-success mx-3" onClick={increment}>+1</button>
     </div>
    </div>
  );
}

export default App;

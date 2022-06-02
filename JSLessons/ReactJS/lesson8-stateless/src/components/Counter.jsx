import React,{useState} from "react";

// const Data = (props) => {
//   return <span>{props.count}</span>;
// };

// const Data = props => {
//     return <span>{props.count}</span>;
//   };

//   const Data = ({count}) => {
//     return <span>{count}</span>;
//   };
  
const Counter = (props) => {
    const [deyer,hadise] = useState(props.deyer);
    const increment = ()=>{
        hadise(deyer+1)
    }
  return (
      
    <div>
      <button onClick={()=>{if(deyer>0){hadise(deyer-1)}}} className="btn btn-danger mx-3">-</button>
      {/* <Data count="0" /> */}
      <span>{deyer}</span>
      <button  onClick={increment} className="btn btn-success mx-3">+</button>
    </div>
  );
};

Counter.defaultProps={
    deyer: 0
}

export default Counter;

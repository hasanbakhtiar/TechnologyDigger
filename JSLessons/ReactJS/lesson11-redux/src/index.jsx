import React from "react";
import ReactDOM from "react-dom";
import { bindActionCreators, createStore } from "redux";

const baslangicState = {
  say: 100,
};
// STORE START
const umumiHadise = createStore((state = baslangicState, hadise) => {
  // REDUCER START
  switch (hadise.type) {
    case "ARTIR":
      const yenideyer =
        typeof hadise.artirmaqUcun === "number" ? hadise.artirmaqUcun : 1;
      return {
        say: state.say + yenideyer,
      };
    case "AZALIR":
      return {
        say: state.say - 1,
      };
    case "RESET":
      return {
        say: 0,
      };
    default:
      return {
        say: state.say,
      };
  }
  // REDUCER END
});
// STORE END

// DISPATCH START
umumiHadise.subscribe(() => {
  console.log(umumiHadise.getState());
});

umumiHadise.dispatch({
  type: "ARTIR",
  artirmaqUcun: 10,
});
// console.log(umumiHadise.getState());

umumiHadise.dispatch({
  type: "AZALIR",
});

umumiHadise.dispatch({
  type: "ARTIR",
});

umumiHadise.dispatch({
  type: "RESET",
});

umumiHadise.dispatch({
  type: "AZALIR",
});

const App = () => {
  return <h1>Hello</h1>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

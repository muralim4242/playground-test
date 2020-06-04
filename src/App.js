import React from 'react';
import IndiaCases from "./Components/IndiaCases/IndiaCases";
import StateSearchBox from "./Components/StateSearchBox/StateSearchBox";
import StateCases from "./Components/StateCases/StateCases";
import './App.css';

function App() {
  return (
    <div>
      <IndiaCases/>
      <StateSearchBox/>
      <StateCases/>
    </div>
  );
}

export default App;

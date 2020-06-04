import React from "react";
import "./indiacases.css"

class IndiaCases extends React.Component {
  render()
  {
    return (<div>
        <h2 className="header">India Cases</h2>
        <div className="horizontal-layout">
          <div className="confirmed-box">
            <h4>Confimed</h4>
            <h3>100000</h3>
            <h5>[+100]</h5>
          </div>

          <div className="active-box">
            <h4>Active</h4>
            <h3>40000</h3>
            <h5>[+100]</h5>
          </div>

          <div className="recorved-box">
            <h4>Recoved</h4>
            <h3>60000</h3>
            <h5>[+100]</h5>
          </div>
          <div className="death-box">
            <h4>Confimed</h4>
            <h3>3000</h3>
            <h5>[+100]</h5>
          </div>
        </div>
      </div>)
  }
}

export default IndiaCases;

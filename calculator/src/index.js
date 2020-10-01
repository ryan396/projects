import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  changeResult = (e) => {
      this.setState(prevState => {
        if (prevState.result === "INV") {
          this.state.result = ""
        }
        if (e === "CE") {
          return { result: "" }
        } else if (e === "=") {
          try {
            return {result: eval(prevState.result)}
          } catch {
            return {result: "INV"}
          }
        } else {
          return { result: prevState.result + e }
        }
      })
    }

  render() {
    return (

      <div id="container" className="container-fluid">
        <div className="row" id="row1">
          <div id="result" className="col">{this.state.result}</div>
        </div>

        <div className="row" id="row2">
          <button name="CE" type="button" id="num" onClick={e => this.changeResult(e.target.name)} className="col-6">CE</button>
          <button name="%" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">%</button>
          <button name="/" id="operator" onClick={e => this.changeResult(e.target.name)} className="col-3">/</button>
        </div>

        <div className="row" id="row3">
          <button name="7" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">7</button>
          <button name="8" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">8</button>
          <button name="9" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">9</button>
          <button name="x" id="operator" onClick={e => this.changeResult(e.target.name)} className="col-3">X</button>
        </div>

        <div className="row" id="row4">
          <button name="4" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">4</button>
          <button name="5" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">5</button>
          <button name="6" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">6</button>
          <button name="-" id="operator" onClick={e => this.changeResult(e.target.name)} className="col-3">-</button>
        </div>

        <div className="row" id="row5">
          <button name="1" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">1</button>
          <button name="2" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">2</button>
          <button name="3" id="num" onClick={e => this.changeResult(e.target.name)} className="col-3">3</button>
          <button name="+" id="operator" onClick={e => this.changeResult(e.target.name)} className="col-3">+</button>
        </div>

        <div className="row" id="row6">
          <button name="0" id="num" className="col-6">0</button>
          <button name="." id="num" className="col-3">.</button>
          <button name="=" id="operator" onClick={e => this.changeResult(e.target.name)} className="col-3">=</button>
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('app')
);


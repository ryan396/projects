import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: " "
    };
  }

  changeResult = (e) => {
    this.setState(prevState => { 
      return {result : prevState.result + e}
      })
    }

  render() {
    return (

      <div id="container" class="container-fluid">
        <div className="row" id="row1">
          <div id="result" className="col">{this.state.result}</div>
        </div>

        <div class="row" id="row2">
          <button name="CE" type="button" id="num" onClick={e => this.changeResult(e.target.name)} class="col-6">CE</button>
          <button name="%" id="num" onClick={e => this.changeResult(e.target.name)} class="col-3">%</button>
          <div id="operator" onclick="grabValue('/')" class="col-3">/</div>
        </div>

        <div class="row" id="row3">
          <div id="num" onclick="grabValue('7')" class="col-3">7</div>
          <div id="num" onclick="grabValue('8')" class="col-3">8</div>
          <div id="num" onclick="grabValue('9')" class="col-3">9</div>
          <div id="operator" onclick="grabValue('x')" class="col-3">X</div>
        </div>

        <div class="row" id="row4">
          <div id="num" onclick="grabValue(4)" class="col-3">4</div>
          <div id="num" onclick="grabValue(5)" class="col-3">5</div>
          <div id="num" onclick="grabValue(6)" class="col-3">6</div>
          <div id="operator" onclick="grabValue('-')" class="col-3">-</div>
        </div>

        <div class="row" id="row5">
          <div id="num" onclick="grabValue('1')" class="col-3">1</div>
          <div id="num" onclick="grabValue('2')" class="col-3">2</div>
          <div id="num" onclick="grabValue('3')" class="col-3">3</div>
          <div id="operator" onclick="grabValue('+')" class="col-3">+</div>
        </div>

        <div class="row" id="row6">
          <div id="num" class="col-6">0</div>
          <div id="num" class="col-3">.</div>
          <div id="operator" onclick="calculate('=')" class="col-3">=</div>
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('app')
);


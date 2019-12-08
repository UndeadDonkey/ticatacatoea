import React, { Component } from 'react';
import './score.css';

class Score extends Component {

  render() {
    
    return (
      <div className="scoreContainer">
        <div className="score">
            <h1 className="Win">Score</h1>
        </div>
        <div className="score">
          <h1 className="numbers">X: <span id="placeholderX">{this.props.countx}</span></h1>
          <h1 className="numbers">O: <span id="placeholderO">{this.props.counto}</span></h1>
        </div>
      </div>
    );
  }
}

export default Score;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './components/score';
import Board from './components/board';
import Reset from './components/button';

class App extends Component {
  blank = "https://i5.walmartimages.com/asr/6d1014f4-682b-4720-818a-615f754e923d_1.ee2acf1cc97d6ac3258af5453afac656.jpeg";
  
  state = {
    player1: true,
    countx: 11,
    counto: 1,
  };

  resetScore = () =>{
    this.setState({ countx: 0, counto: 0 });
  }

  render() {
    return (
      <div className="App">
        <Score countx={this.state.countx} counto={this.state.counto} />
        <Board setPiece={this.setPiece} setUrl1={this.state.board[0][0]}/>
        <Reset click={this.resetScore} />
      </div>
    );
  }
}

export default App;

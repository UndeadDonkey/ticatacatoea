import React, { Component } from 'react';
import Square from './square';
import './board.css';

class Board extends Component {
  blank = "https://i5.walmartimages.com/asr/6d1014f4-682b-4720-818a-615f754e923d_1.ee2acf1cc97d6ac3258af5453afac656.jpeg";
  x = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/896px-X_mark.svg.png";
  o = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1200px-Letter_o.svg.png";
  state = {
    player1: true,
    board: [
      this.blank, this.blank, this.blank,
      this.blank, this.blank, this.blank,
      this.blank, this.blank, this.blank
    ],
  }

  setPiece = () =>{
    if(this.state.player1){
      console.log("x");
      this.setState({player1: false});
    }else{
      console.log("o");
      this.setState({player1: true});
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Square setUrl={this.state.board[0]} />
          <Square setUrl={this.state.board[1]} />
          <Square setUrl={this.state.board[2]} />
        </div>
        <div className="row">
          <Square setUrl={this.state.board[3]} />
          <Square setUrl={this.state.board[4]} />
          <Square setUrl={this.state.board[5]} />
        </div>
        <div className="row">
          <Square setUrl={this.state.board[6]} />
          <Square setUrl={this.state.board[7]} />
          <Square setUrl={this.state.board[8]} />
        </div>
      </div>
    );
  }
}

export default Board;
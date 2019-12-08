import React, { Component } from 'react';

class Square extends Component {
  render() {
    return (
          <img onClick={this.props.setPiece} className="item" src={this.props.setUrl} alt="rip"/>
    );
  }
}

export default Square;
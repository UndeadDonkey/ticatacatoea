import React, { Component } from 'react';
import Score from './score';

class Reset extends Component {

  render() {
    return (
      <div>
        <button onClick={ this.props.click } className="reset">Reset</button>
      </div>
    );
  }
}

export default Reset;
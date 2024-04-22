import React, { Component } from 'react'

class ChildComponent extends Component {
  render() {
    const {count, handleClick} = this.props;
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={handleClick}>Increment Count</button>
      </div>
    )
  }
}

export default ChildComponent

import React, { Component } from 'react'

export class ClickCounter extends Component {

  render() {
    return (
      <div>
        <div>Counter: {this.props.count}</div>
        <div>
          <button onClick={this.props.incrementCount}>increment</button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

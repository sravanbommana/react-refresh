import React, { Component } from 'react'

export class HoverCounter extends Component {
  render() {
    return (
      <div>
        <div>Hover Counter: {this.props.count}</div>
        <div>
          <button onMouseOver={this.props.incrementCount}>hover to incement</button>
        </div>
      </div>
    )
  }
}

export default HoverCounter

import React, { Component, createRef } from 'react'

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }
  
  handleClick = () => {
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Input

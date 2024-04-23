import React, { Component, createRef } from 'react'
import Input from './Input';

export class ForwardRef extends Component {
  constructor(props) {
    super(props)
    this.ref = createRef();
  }
  
  clickHandler = () => {
    this.ref.current.focus();
  }
  render() {
    return (
      <div>
        <Input ref={this.ref} />
        <div>
          <button onClick={this.clickHandler}>Give Focus</button>
        </div>
      </div>
    )
  }
}

export default ForwardRef

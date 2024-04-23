import React, { Component, createRef } from 'react'
import Input from './Input'

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.componentRef = createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  }
  
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <div onClick={this.clickHandler}><button>Focus Input</button></div>
      </div>
    )
  }
}

export default ParentComponent

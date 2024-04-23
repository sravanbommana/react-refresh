import React, { Component } from 'react'

export class LifeCycleMethodsDemo extends Component {

  constructor(props) {
    console.log("Inside Constructor")
    super(props)
    this.state = {
      show: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Inside shouldComponentUpdate");
    return null;  
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Inside getSnapshotBeforeUpdate");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Inside componentDidUpdate");
    return null;
  }
  
  componentWillUnmount() {
    console.log("Inside componentWillUnmount");
  }
  render() {
    console.log("Inside Render")
    return (
      <div>
        
        Welcome to Reatc Life Cycle 
        <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button>
      </div>
    )
  }
}

export default LifeCycleMethodsDemo

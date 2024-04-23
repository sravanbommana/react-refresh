import React, { Component } from 'react'

class ErrorBoundaries extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  

  static getDerivedStatesFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.log(error);
  }
  render() {
    console.log("Inside ErrorBoundaries", this.state.hasError);
   if(this.state.hasError) {
    return <div>Something went wrong</div>
   } else {
    return <div>{this.props.children} </div>
   }
  }
}

export default ErrorBoundaries

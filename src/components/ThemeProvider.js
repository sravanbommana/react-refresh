import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color: "red",
       setColor: this.setColor
    }
  }

  setColor = (color) => {
    console.log("Insie setColor", color)
    this.setState({
      color: color
    })
  }
  
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{...this.state}}>
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default ThemeProvider

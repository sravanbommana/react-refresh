import React, { Component } from 'react'
import { withThemeContext } from '../hoc/withThemeContext'

function Beta(props) {

  const clickHandler = () => {
    console.log("!!!!!!", props)
    //setColor("red");
  }
  return (
    <div>
      <button onClick={clickHandler}>Change Theme</button>
    </div>
  )
}

export default withThemeContext(Beta);

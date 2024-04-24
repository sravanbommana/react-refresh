import React, { useEffect } from 'react'
import { withThemeContext } from '../hoc/withThemeContext'

const Alpha = (props) => {
  const { color, setColor } = props;
  return (
    <div style={{color:color}}>
      Welcome to Alpha
      <button onClick={() => setColor("red")}>Change</button>
    </div>
  )
}

export default withThemeContext(Alpha);

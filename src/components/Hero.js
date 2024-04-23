  import React from 'react'
import withErrorBoundarie from './hoc/withErrorBoundarie';
  
  const Hero = (props) => {
    console.log(props)
    if(props.role === 'Joker') {
      throw new Error("Joker is not a hero");
    }
    
    return (
      <div>
        {props.role}
      </div>
    )
  }
  
  export default withErrorBoundarie(Hero);
  
import React, { Component } from 'react';
import ErrorBoundaries from '../ErrorBoundaries';

const withErrorBoundarie = (OriginalComponent) => {
  return class NewComponent extends Component {
    
    render() {
      return(
        <ErrorBoundaries>
          <OriginalComponent {...this.props} />
        </ErrorBoundaries>
      )
    }
  }
}

export default withErrorBoundarie;

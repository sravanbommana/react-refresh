import { Component } from "react"
import { ThemeContext } from "../components/ThemeContext";

export function withThemeContext(OriginalComponent) {
  return class NewComponent extends Component {
    render() {
      return(
        <ThemeContext.Consumer>
            {
              (contexts) => <OriginalComponent {...this.props} {...contexts} />
            }
        </ThemeContext.Consumer>
      )
    }
  }
}
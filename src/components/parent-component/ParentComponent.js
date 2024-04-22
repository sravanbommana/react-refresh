import { Component } from "react";
import ChildComponent from "../child-component/ChildComponent";

class ParentClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        ...this.state,
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return <div>
      <ChildComponent count={this.state.count} handleClick={this.handleClick}/>
    </div>;
  }
}

export default ParentClass;

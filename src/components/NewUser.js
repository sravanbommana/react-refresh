import React, { Component } from 'react'
import { fetchData } from '../actions/user-actions'
import { connect } from 'react-redux';

export class NewUser extends Component {
 
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { users } = this.props;
    console.log(this.props)
    return (
      <div>
        Welcome user {users.length}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'state')
  return {
    users: state.userData.users
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);

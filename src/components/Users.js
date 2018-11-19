import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <p>Users!</p>
          <li>User Name: {this.props.users}</li>
          <li>Count: {this.props.users} </li>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.count }
}

export default Users

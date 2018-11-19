import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <li>User Name: {this.props.users.username}</li>
          <li>Count: {this.props.users.length} </li>
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

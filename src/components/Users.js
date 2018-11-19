import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <li>User Name: </li>
          <li>Count: </li>
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

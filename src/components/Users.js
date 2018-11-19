import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <p>Users!</p>
          User Name: {this.props.users.map(user => <li></li>)}
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

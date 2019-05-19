import React, { Component } from 'react';

class UserDropdown extends Component {
  render() {
    return(
      <div>
        {this.props.user}
      </div>
    )
  }
}

export default UserDropdown;

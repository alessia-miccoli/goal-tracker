import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UserForm extends Component {
  render() {
    return (
      <div className="userform">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<UserForm/>, document.getElementById('app'));

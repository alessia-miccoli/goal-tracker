import React from 'react';
import Category from './Categories'

import  './style/UserForm.css'
class UserForm extends React.Component {

  render(){
    var categoryList = this.props.categories.map(x => <div key={x} className="categoryElement"><p>{x}</p><button id={x} onClick={this.props.removeCategory}>x</button></div>);

    return (
      <div className="UserForm">

        <p>Let's start by knowing you and your passions.</p>
        <div id="userForm">
          <label>What's your name? </label><br/>
          <input onChange={this.props.getUserName} type="text"/>

          <div id="categories">
            
            <p>Insert below the categories ("career", "health", "school", ...) of your goals to keep them organized.</p>

            <Category categories={this.props.categories}
            saveCategory={this.props.saveCategory}/>
            {this.props.errorMessage}
          </div>

          {categoryList}
        </div>
        <p>Click on Save to start listing your goals for each category.<br/>
        If you think you forgot any category, don't worry. You can always add them later.</p>
        <button onClick={this.props.saveUserForm}>Save</button>
      </div>
    );
  }
}

export default UserForm;
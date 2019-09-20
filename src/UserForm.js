import React from 'react';
import Categories from './Categories'

import  './style/UserForm.css'
class UserForm extends React.Component {

  render(){
    var categoryList = this.props.categories.map(x => <div key={x} className="categoryElement"><p>{x}</p><button className="deleteListButton" id={x} onClick={this.props.removeCategory}>x</button></div>);

    return (
      <div className="UserForm">

        <div id="userForm">
          <label>What's your name? </label><br/>
          <input id="nameField" onChange={this.props.getUserName} type="text"/>

          <div id="categories">
            
            <h4>Insert below the categories (ex. "Career") of your goals to keep them organized.</h4>

            <Categories categories={this.props.categories}
            saveCategory={this.props.saveCategory}
            errorMessage={this.props.errorMessage}/>
          </div>

          <div id="userFormCategories">{categoryList}</div>
        </div>
        <p>Click on Save to start listing your goals for each category.<br/>
        If you think you forgot any category, don't worry. You can always add them later.</p>
        <button className="button" onClick={this.props.saveUserForm}>Save</button>
      </div>
    );
  }
}

export default UserForm;
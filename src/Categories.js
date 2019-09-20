import React from 'react';

import './style/Categories.css';


class Categories extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.saveCategory} className="Category">
        <p>{this.props.categories == [] ? "There is nothing here. Insert a Category to start" : "" }</p>
        <div className="addContainer">
          <input className="categoryField" name="category" type="text" placeholder="Insert Category"/>
          <input className="button" type="submit" value="add"/>
        </div>
        <p>{this.props.errorMessage}</p>
      </form>
    );
  }
}

export default Categories;
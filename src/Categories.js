import React from 'react';

import './style/Categories.css';


class Categories extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.saveCategory} className="Category">
        <input name="category" type="text" placeholder="Insert Category"/>
        <input type="submit"/>
      </form>
    );
  }
}

export default Categories;
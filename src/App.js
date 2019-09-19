import React from 'react';
import UserForm from './UserForm'

import './style/App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentYear : new Date().getFullYear(),
      categories : [],
      errorMessage: "",
      userName : ""
    }

    this.saveCategory = this.saveCategory.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

  saveCategory(event){
    let category = event.target.category.value;
    let categ = [...this.state.categories];

    if(categ.indexOf(category) > -1){
      this.setState(()=>({
        errorMessage: `Category ${category} is already present.`
      }));
    }else{
      this.setState((prevState)=>({
        categories: prevState.categories.concat(category.trim()),
        errorMessage: ""
      }));
    }

    event.target.category.value = "";
    event.preventDefault();
  }

  getUserName(event){
    let name = " " + event.target.value ;
    this.setState(()=>({
      userName: name
    }));
  }

  removeCategory(event){
    let category = event.target.id;

    this.setState((prevState)=>({
      categories: prevState.categories.filter(x => x !== category)
    }));

    console.log(this.state.categories);
  }

  render(){
    return (
      <div className="App">
        Hi{this.state.userName}! Are you ready to set your goals for this {this.state.currentYear}? 
        <UserForm categories={this.state.categories}
        getUserName={this.getUserName}
        errorMessage={this.state.errorMessage}
        saveCategory={this.saveCategory}
        removeCategory={this.removeCategory}></UserForm>
      </div>
    );
  }
}

export default App;

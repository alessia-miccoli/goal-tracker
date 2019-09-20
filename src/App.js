import React from 'react';
import UserForm from './UserForm'

import './style/App.css';
import CategoriesContainer from './CategoriesContainer';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentYear : new Date().getFullYear(),
      categories : [],
      errorMessage: "",
      userName : "",
      isUserFormVisibile: true,
      greetingMessage: "Here you can set your goals for this"
    }

    this.saveCategory = this.saveCategory.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.saveUserForm = this.saveUserForm.bind(this);
  }

  saveCategory(event){
    let category = event.target.category.value;
    let categ = [...this.state.categories];

    if(categ.indexOf(category) > -1){
      this.setState(()=>({
        errorMessage: `Category ${category} is already present.`
      }));
    }else{
      if(category !== ""){
        this.setState((prevState)=>({
          categories: prevState.categories.concat(category.trim()),
          errorMessage: ""
        }));
      }
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

  }

  saveUserForm(){
    this.setState(()=>({
      isUserFormVisibile: false,
      greetingMessage: "These are your goals for this"
    }));
  }

  render(){
    return (
      <div className="App">
        <h2>Hi{this.state.userName}! {this.state.greetingMessage} {this.state.currentYear} </h2>

        { this.state.isUserFormVisibile && <UserForm categories={this.state.categories}
        getUserName={this.getUserName}
        errorMessage={this.state.errorMessage}
        saveCategory={this.saveCategory}
        removeCategory={this.removeCategory}
        saveUserForm={this.saveUserForm}/>}

        { !this.state.isUserFormVisibile && <CategoriesContainer 
        saveCategory={this.saveCategory}
        removeCategory={this.removeCategory}
        categories={this.state.categories}
        errorMessage={this.state.errorMessage}
        />}
      </div>
    );
  }
}

export default App;

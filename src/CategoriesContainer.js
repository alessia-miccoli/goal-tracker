import './style/CategoriesContainer.css'
import Categories from './Categories'
import React from 'react';
import CategoryContainer from './CategoryContainer';


class CategoriesContainer extends React.Component{
    render(){
        let categories = this.props.categories.map((x)=><CategoryContainer key={x} category={x} removeCategory={this.props.removeCategory}/>)

        return(
            <div>
                <div id="categoriesContainer">
                    {this.props.categories.length == 0 ? <h4 id="noCategory">To start, add a Category.</h4> : categories }
                </div>
                
                <Categories 
                saveCategory={this.props.saveCategory}
                removeCategory={this.props.removeCategory}
                categories={this.props.categories}
                errorMessage={this.props.errorMessage}/>
            </div>
        )
    }
}

export default CategoriesContainer;
import React from 'react';
import './style/CategoryContainer.css'

class CategoryContainer extends React.Component{

    render(){
        return(
            <div className="categoryContainer">
            {this.props.category}
            <button id={this.props.category} onClick={this.props.removeCategory}>x</button>
            </div>
        )
    }
}

export default CategoryContainer;

import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipeDetail extends Component {
  render() {
    console.log('rd',this.props)
    if (!this.props.recipe) {
      return <div>Select a recipe to view ingredients</div>
    }
    const name = this.props.recipe
    return (
      <div>
        <h3>Details for: {name}</h3>
        <ul>{ this.props.recipes[name].ingredients_list.map((ingredient) => {
          return (
            <li key={ingredient}>{ingredient}</li>
          )
        }) }</ul>       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.activeRecipe,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeDetail)

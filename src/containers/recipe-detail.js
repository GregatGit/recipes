import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipeDetail extends Component {
  render() {
    if (!this.props.recipe) {
      return <div>Select a book to get started</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.recipe.name}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.activeRecipe
  }
}

export default connect(mapStateToProps)(RecipeDetail)

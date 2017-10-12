import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectRecipe } from '../actions/index'

class RecipeList extends Component {
  renderList = () => {
    return this.props.recipes.map((recipe) => {
      return (
        <li key={recipe.name} className='list-group-item'>{recipe.name}</li>
      )
    })
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  // whatever is returned from here will show up as props inside of booklist
  return {
    recipes: state.recipes
  }
}
// any thing return from this will end up as props on the recipeList container
const mapDispatchToProps = (dispatch) => {
  // whenever selectRecipe is called , the result passes to all our reducers
  return bindActionCreators({ selectRecipe: selectRecipe }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)

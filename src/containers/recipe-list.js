import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectRecipe } from '../actions/index'
import RecipeDetail from './recipe-detail'
import { Link } from 'react-router-dom'

class RecipeList extends Component {
  renderList = () => {
    const names = Object.keys(this.props.recipes)
    return names.map((recipe) => {
      return (
        <li
          key={recipe}
          onClick={() => this.props.selectRecipe(recipe)}
          className='list-group-item'>{recipe}
        </li>
      )
    })
  }

  render() {
    return (
      <div>    
        <ul className='list-group col-sm-4'>
          {this.renderList()}
        </ul>
        <RecipeDetail />
        <Link className='btn btn-primary' to='/new' >
        Add a Recipe
      </Link>
      </div>
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
function mapDispatchToProps  (dispatch) {
  // whenever selectRecipe is called , the result passes to all our reducers
  return bindActionCreators({ selectRecipe: selectRecipe }, dispatch)
}
// promote recipelist from a component to a conatianer - it needs to know about this dispatch method, selectrecipe. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)

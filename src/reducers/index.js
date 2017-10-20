import { combineReducers } from 'redux'
import RecipesReducer from './reducer_recipes'
import ActiveRecipe from './reducer_active_recipe'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  recipes: RecipesReducer,
  activeRecipe: ActiveRecipe,
  form: formReducer
})

export default rootReducer

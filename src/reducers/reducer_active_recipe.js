import { RECIPE_SELECTED } from '../actions/index'
// state arg is not application state, only the state this reducer is responsible for

export default function(state = null, action) {
  switch(action.type) {
    case RECIPE_SELECTED:
      return action.payload
  }
  return state
}
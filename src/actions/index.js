export function selectRecipe(recipe) {
  // selectRecipe is an action creator - it needs to return an action
  // an object with a type property
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  }
}


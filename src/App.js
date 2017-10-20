import React, { Component } from 'react';

import RecipeList from './containers/recipe-list'
import RecipeDetail from './containers/recipe-detail'
import AddNewRecipe from './containers/add-new-recipe'

class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />
        <RecipeDetail />
        <AddNewRecipe />
      </div>
    );
  }
}

export default App;

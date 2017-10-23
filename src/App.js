import React, { Component } from 'react';
import RecipeList from './containers/recipe-list'
import AddNewRecipe from './containers/add-new-recipe'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path='/new' component={AddNewRecipe} />
        <Route path='/' component={RecipeList} />
        </Switch>
      </div>
    );
  }
}

export default App;

import recipes from '../data/recipes.json'

export default function () {
  console.log('r2',recipes)
  // let myData = ''
  // if (localStorage.myRecipes){
  //   myData= JSON.parse(localStorage.myRecipes)
  // } else {
  //   myData = recipes
  //   localStorage.setItem('myRecipes', JSON.stringify(myData))
  // }
  const myData = recipes
  return myData
}

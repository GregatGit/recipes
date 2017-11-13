import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class AddNewRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      ingredients: []
    }
  }

  renderTitleField = (field) => {
    return (
      <div className='form-group'>
        <label>Name</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>
    )
  }

  renderIngedientsField = () => {
    return (
      <div>
        <label>Ingedients</label>
        <input 
          type='text'
        />
      </div>
    )
  }

  handleInputName = (event) => {
    console.log('hi', event.target.value)
		this.setState({
			name: event.target.value
		});
  }
  
  handleInputIndgedient = (event) => {
    const ingred = event.target.value.split(',')
    this.setState({ ingredients: ingred})

  }

  render() {
    return (
      <form>
        <Field 
          name='title'
          component={this.renderTitleField}
          onChange={this.handleInputName}
        />
        <Field 
          name='ingredients'
          component={this.renderIngedientsField}
        />
        <Link className='btn btn-primary' to='/'>Home</Link>
        <div>Name: {this.state.name}</div>
        <div>Ingredients: {this.state.ingredients.toString()}</div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  // Validate the input from 'values'

  // if errors are empty the form is fine
  // if errors has any properties, redux assume form in invalid
  return errors
}

export default reduxForm({
  validate,
  form: 'AddNewRecipe'
})(AddNewRecipe)

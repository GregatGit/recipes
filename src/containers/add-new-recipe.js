import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class AddNewRecipe extends Component {
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
        <label>Ingedient</label>
        <input 
          type='text'
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field 
          name='title'
          component={this.renderTitleField}
        />
        <Field 
          name='ingredients'
          component={this.renderIngedientsField}
        />
        <Link className='btn btn-primary' to='/'>Home</Link>
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { createBoard } from '../actions'

class BoardNew extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }
  }

  renderField = (field) => {
    const { meta: { touched, error } } = field

    return (
      <div>
        <label>{field.title}</label>
        <input
          type={field.type}
          {...field.input}
        />
      </div>
    )
  }

  handleOnSubmit = (values) => {
    this.props.createBoard(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleOnSubmit)}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Add Board</button>
        </form>
      </div>
    )
  }
}

export default reduxForm ({
  form: 'BoardNewForm',
})(
  connect(null, { createBoard })(BoardNew)
)

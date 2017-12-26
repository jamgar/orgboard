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
        <input
          className="form-control"
          type={field.type}
          placeholder={field.placeholder}
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
      <div className="container">
        <div className="row">
          <div id="board-form" className="col-sm-4 panel panel-info">
            <form className="form-inline" onSubmit={handleSubmit(this.handleOnSubmit)}>
              <div className="form-group">
                <Field
                  label="Title"
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  component={this.renderField}
                />
              </div>
              <button type="submit" className="btn btn-primary">Add Board</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm ({
  form: 'BoardNewForm',
})(
  connect(null, { createBoard })(BoardNew)
)

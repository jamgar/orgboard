import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { signupUser } from '../../actions'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      className="form-control "
      {...input}
      placeholder={label}
      type={type}
    />
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
)

class Signup extends Component {
  handleFormSubmit = (formProps) => {
    this.props.signupUser(formProps)
  }

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div class="container">
        <div class="page-header">
          <h2>Sign Up</h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
              <Field
                name="email"
                type="text"
                component={renderField}
                label="Email"
              />
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
              <Field
                name="password_confirmation"
                type="password"
                component={renderField}
                label="Password Confirmation"
              />
              {this.renderAlert()}
              <button action="submit" className="btn btn-primary">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {}

  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password'
  }

  if (!formProps.password_confirmation) {
    errors.password_confirmation = 'Please enter a password confirmation'
  }

  if (formProps.password !== formProps.password_confirmation) {
    errors.password = 'Passwords must match'
  }
  console.log(formProps)

  return errors
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signup',
  validate
})(
  connect(mapStateToProps, { signupUser })(Signup)
)

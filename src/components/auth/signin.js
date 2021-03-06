import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { signinUser } from '../../actions'

const renderField = ({ input, label, type, autofocus, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      className="form-control "
      {...input}
      placeholder={label}
      type={type}
      autoFocus={autofocus}
    />
  </div>
)

class Signin extends Component {
  handleFormSubmit = ({ email, password }) => {
    //  console.log(email, password)
    this.props.signinUser({ email, password })
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
      <div className="container">
        <div className="page-header">
          <h2>Sign In</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
              <Field
                name="email"
                type="text"
                component={renderField}
                label="Email"
                autoFocus="true"
              />
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
              {this.renderAlert()}
              <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signin'
})(
  connect(mapStateToProps, { signinUser })(Signin)
)

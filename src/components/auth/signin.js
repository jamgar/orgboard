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
      autofocus={autofocus}
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
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
              <Field
                name="email"
                type="text"
                component={renderField}
                label="Email"
                autofocus="true"
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from '../../history'

export default (ComponsedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        history.push('/')
      }
    }

    render() {
      return <ComponsedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}

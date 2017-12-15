import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signoutUser } from '../../actions'

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser()
  }

  render() {
    return <div>Signed Out...</div>
  }
}

export default connect(null, { signoutUser })(Signout)

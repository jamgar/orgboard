import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderLinks = () => {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/boards">My Boards</Link>
        </li>,
        <li className="nav-item" key={4}>
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      ]
    }
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <Link to="/" className="navbar-brand">OrgBoard</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)

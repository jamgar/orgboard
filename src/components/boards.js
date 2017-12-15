import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchTodos } from '../actions'

class Boards extends Component {
  componentWillMount() {
    this.props.fetchTodos()
  }

  renderTodos() {
    return _.map(this.props.todos, (todo) => {
      return (
        <div key={todo.id}>{todo.title}</div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderTodos()}</div>
    )
  }
}

function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { fetchTodos })(Boards)

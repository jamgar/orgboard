import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchBoards } from '../actions'
import BoardNew from '../containers/board_new'

class Boards extends Component {
  componentDidMount() {
    this.props.fetchBoards()
  }

  renderBoards() {
    return _.map(this.props.boards, (board) => {
      return (
        <div key={board.id}>{board.title}</div>
      )
    })
  }

  render() {
    return (
      <div>
        <BoardNew />
        {this.renderBoards()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { boards: state.boards }
}

export default connect(mapStateToProps, { fetchBoards })(Boards)

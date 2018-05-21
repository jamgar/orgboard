import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchBoards } from '../actions'
import BoardNew from '../containers/board_new'
import Board from './board'

class Boards extends Component {
  componentDidMount() {
    this.props.fetchBoards()
  }

  renderBoards() {
    return _.map(this.props.boards, (board) => (
      <Board
        key={board.id}
        board={board}
      />
    ))
  }

  render() {
    return (
      <div>
        <BoardNew />
        <div className="container">
          <div className="row">
            {this.renderBoards()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { boards: state.boards }
}

export default connect(mapStateToProps, { fetchBoards })(Boards)

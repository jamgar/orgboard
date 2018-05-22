import React, { Component } from 'react'
import _ from 'lodash'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { createCard, removeCard, updateBoard, removeBoard } from '../actions'
import Card from './card'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: null,
      title: ''
    }
  }
  handleDeleteCard = (card_id) => {
    this.props.removeCard(this.props.board.id, card_id)
  }

  renderCards = () => {
    return _.map(this.props.board.cards, (card) => {
      return (
        <Card
          key={card.id}
          board_id={this.props.board.id}
          card={card}
          handleDeleteCard={this.handleDeleteCard}
        />
      )
    })
  }

  handleOnSubmit = (values) => {
    const card = { content: values[`cardContent_${this.props.board.id}`] }
    this.props.createCard(this.props.board.id, card)
    this.props.reset()
  }

  handleOnEditBoard = (e) => {
    e.preventDefault()
    const { board } = this.props
    this.props.updateBoard({ ...board, title: this.state.title })
    this.setState({ editing: null })
  }

  handleOnDelete = () => {
    this.props.removeBoard(this.props.board.id)
  }

  handleSetEdit = () => {
    this.setState({ editing: this.props.board.id })
  }

  handleOnBlur = () => {
    this.setState({ editing: null })
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
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

  renderCardForm = (board) => {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleOnSubmit)}>
        <Field
          name={`cardContent_${board.id}`}
          placeholder="Enter Content..."
          type="text"
          component={this.renderField}
        />
      </form>
    )
  }

  render () {
    const { board } = this.props
    return (
      <div className="col col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="row">
              <div className="col col-xs-10">
                {
                  this.state.editing === board.id ? (
                    <form onSubmit={this.handleOnEditBoard}>
                    <input
                    type="text"
                    defaultValue={board.title}
                    onChange={this.onTitleChange}
                    onBlur={this.handleOnBlur}
                    autoFocus
                    />
                    </form>
                  ) : (
                    <p onClick={this.handleSetEdit}><strong>{board.title}</strong></p>
                  )
                }
              </div>
              <div className="col col-xs-2">
                <button className="btn btn-link pull-right" onClick={this.handleOnDelete}>X</button>
              </div>
            </div>
          </div>
          <div className="panel-body">
            {this.renderCardForm(board)}
            <ul className="list-group">
              {this.renderCards()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'CardForm'
})(
  connect(null, { createCard, removeCard, updateBoard, removeBoard })(Board)
)

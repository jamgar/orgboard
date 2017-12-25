import React, { Component } from 'react'
import _ from 'lodash'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { createCard } from '../actions'
import Card from './card'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  renderCards = () => {
    return _.map(this.props.board.cards, (card) => {
      return (
        <Card
          key={card.id}
          card={card}
        />
      )
    })
  }

  handleOnSubmit = (values) => {
    const card = { content: values[`cardContent_${this.props.board.id}`] }
    this.props.createCard(this.props.board.id, card)
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
          <div className="panel-heading">{board.title}</div>
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
  connect(null, { createCard })(Board)
)

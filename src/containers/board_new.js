import { Component } from 'react'
import { connect } from 'react-redux'

import { createBoard } from '../actions'

class BoardNew extends Component {
  constructor() {
    super()
    
    this.state = {
      title: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createBoard(this.state)
  }

  handleOnChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          placeholder="Enter Title"
        />
        <input
          type="submit"
          value="Add Board"
        />
      </form>
    )
  }
}

export default connect(null, { createBoard })(BoardNew)

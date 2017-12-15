import { CREATE_BOARD } from '../constants'

const board = (action) => {
  // Used to simulate the backend
  let { title } = action
  return {
    id: Math.random(),
    title
  }
}

const boards = (state = [], action) => {
  let boards = null
  switch(action.type) {
    case CREATE_BOARD:
      // use axios to post to backend
      boards = [...state, board(action)]
      return boards
    default:
      return state
  }
}

export default boards

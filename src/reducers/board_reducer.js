import { FETCH_BOARDS, CREATE_BOARD, UPDATE_BOARD, REMOVE_BOARD, REMOVE_CARD } from '../constants'
import _ from 'lodash'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_BOARDS:
      return _.mapKeys(action.payload, 'id')
    case CREATE_BOARD:
      return { ...state, [action.payload.data.id]: action.payload.data }
    case UPDATE_BOARD:
      return { ...state, [action.payload.data.id]: action.payload.data }
    case REMOVE_BOARD:
      const newBoardState = { ...state }
      delete newBoardState[action.payload]
      return { ...newBoardState }
    case REMOVE_CARD:
      const updatedCards = state[action.board_id].cards.filter(({ id }) => id != action.card_id)
      return {
        ...state,
        [action.board_id]: {
          ...state[action.board_id],
          cards: updatedCards
        } }
    default:
      return state
  }
}

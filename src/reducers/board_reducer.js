import { FETCH_BOARDS, CREATE_BOARD, UPDATE_BOARD } from '../constants'
import _ from 'lodash'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_BOARDS:
      return _.mapKeys(action.payload, 'id')
    case CREATE_BOARD:
      return { ...state, [action.payload.data.id]: action.payload.data }
    case UPDATE_BOARD:
      return { ...state, [action.payload.data.id]: action.payload.data }
  }

  return state
}

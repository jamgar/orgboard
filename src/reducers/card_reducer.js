import { CREATE_CARD } from '../constants'
import _ from 'lodash'

export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_CARD:
      return { ...state, [action.payload.data.id]: action.payload.data }
  }

  return state
}


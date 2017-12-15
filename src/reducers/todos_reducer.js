import _ from 'lodash'

import { FETCH_TODOS } from '../constants'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_TODOS:
      return _.mapKeys(action.payload, 'id')
  }

  return state
}

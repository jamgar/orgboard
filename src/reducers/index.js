import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import authReducer from './auth_reducer'
import todosReducer from './todos_reducer'
import boardReducer from './board_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  todos: todosReducer,
  boards: boardReducer,
})

export default rootReducer

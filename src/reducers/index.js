import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import authReducer from './auth_reducer'
import todosReducer from './todos_reducer'
//import BoardReducer from 'board_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  todos: todosReducer
  //newBoard: BoardReducer,
})

export default rootReducer

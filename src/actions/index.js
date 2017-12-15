import axios from 'axios'

import history from '../history'
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_TODOS
} from '../constants'

const ROOT_URL = 'http://localhost:3000'

export function signinUser({ email, password }) {
 return (dispatch) => {
   axios.post(`${ROOT_URL}/auth/login`, { email, password })
     .then(response => {
       dispatch({ type: AUTH_USER })
       localStorage.setItem('auth_token', response.data.auth_token)
       history.push('/boards')
     })
     .catch((response) => {
        dispatch(authError('Invalid credentials'))
     })
 }
}

export function signupUser({ email, password, password_confirmation }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { name: email, email, password, password_confirmation })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('auth_token', response.data.auth_token)
        history.push('/boards')
      })
      .catch(response => {
        dispatch(authError('Email is in use.'))
      })
  }
}

export function signoutUser() {
  localStorage.removeItem('auth_token')

  return { type: UNAUTH_USER }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchTodos() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/todos`, {
      headers: { authorization: localStorage.getItem('auth_token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_TODOS,
          payload: response.data
        })
      })
  }
}

//export const createBoard = () => {
//  // Use axios to post to backend
//  const action = {
//    type: CREATE_BOARD,
//    payload: board
//  }
//  return action
//}


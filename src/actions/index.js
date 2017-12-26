import axios from 'axios'

import history from '../history'
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_BOARDS,
  CREATE_BOARD,
  UPDATE_BOARD,
  FETCH_TODOS
} from '../constants'

const ROOT_URL = 'https://determined-keller-0474d9.netlify.com'
// const ROOT_URL = 'http://localhost:3000'

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

export const fetchBoards = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/boards`, {
      headers: {
        Authorization: localStorage.getItem('auth_token'),
        Accept: 'application/vnd.todos.v1+json'
      }
    })
      .then(response => {
        console.log('FETCH BOARDS', response.data)
        dispatch({
          type: FETCH_BOARDS,
          payload: response.data
        })
      })
  }
}

export const createBoard = (board) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/boards`, board, {
      headers: {
        Authorization: localStorage.getItem('auth_token'),
        Accept: 'application/vnd.todos.v1+json'
      }
    })
      .then(response => {
        dispatch({
          type: CREATE_BOARD,
          payload: response
        })
      })
      .catch(response => {
        console.log('Error', response)
      })
  }
}

export const createCard = (board_id, card) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/boards/${board_id}/cards`, card , {
      headers: {
        Authorization: localStorage.getItem('auth_token'),
        Accept: 'application/vnd.todos.v1+json'
      }
    })
      .then(response => {
        dispatch({
          type: UPDATE_BOARD,
          payload: response
        })
      })
      .catch(response => {
        console.log('Error', response)
      })
  }
}

export function fetchTodos() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/todos`, {
      headers: {
        authorization: localStorage.getItem('auth_token'),
        Accept: 'application/vnd.todos.v1+json'
      }
    })
      .then(response => {
        console.log(response.data)
        dispatch({
          type: FETCH_TODOS,
          payload: response.data
        })
      })
  }
}



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import './index.css';
import history from './history'
import App from './components/App';
import reducers from './reducers'
import { AUTH_USER } from './constants'
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
// Check to see if user is logged in
const auth_token = localStorage.getItem('auth_token')
if (auth_token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>
    , document.getElementById('root'));
registerServiceWorker();

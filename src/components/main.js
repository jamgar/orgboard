import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../containers/home'
import About from '../containers/about'
import Contact from '../containers/contact'
import Signin from './auth/signin'
import Signout from './auth/signout'
import Signup from './auth/signup'
import Boards from './boards'
import RequireAuth from './auth/require_auth'

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/signin' component={Signin} />
      <Route path='/signout' component={Signout} />
      <Route path='/signup' component={Signup} />
      <Route path='/boards' component={RequireAuth(Boards)} />
    </Switch>
  </div>
)

export default Main

import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'

const App = () => (
  <div>
    <Switch>
  <Route path='/register' component={Register}/>
  <Route path='/login' component={Login}/>
  <Route path='/home' component={Home}/>
    </Switch>
  </div>
)

export default withRouter(App)
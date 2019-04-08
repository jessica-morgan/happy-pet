import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

const App = () => (
  <div>
    <Switch>
  <Route path='/register' component={Register}/>
  <Route path='/login' component={Login}/>
    </Switch>
  </div>
)

export default withRouter(App)
import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import LandingPage from './LandingPage'
import IncorrectLogin from './IncorrectLogin'
import CreatePet from './CreatePet'
import PetPage from './PetPage'

const App = () => (
  <div>
    <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path='/register' component={Register}/>
  <Route path='/login' component={Login}/>
  <Route path='/incorrectLogin' component={IncorrectLogin}/>
  <Route path='/home' component={Home}/>
  <Route path='/createpet' component={CreatePet}/>
  <Route path='/petpage' component={PetPage}/>
    </Switch>
  </div>
)

export default withRouter(App)
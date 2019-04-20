import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import LandingPage from './LandingPage'
import IncorrectLogin from './IncorrectLogin'
import CreatePet from './CreatePet'
import PetPage from './PetPage'
import UserPage from './UserPage'
import LoadingView from './LoadingView'
import FeedPet from './FeedPet'

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
  <Route path='/userpage' component={UserPage}/>
  <Route path='/loading' component={LoadingView}/>
  <Route peth='/feedpet' component={FeedPet}/>
    </Switch>
  </div>
)

export default withRouter(App)
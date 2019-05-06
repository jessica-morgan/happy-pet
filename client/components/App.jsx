import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import LandingPage from './LandingPage'
import CreatePet from './CreatePet'
import PetPage from './PetPage'
import UserPage from './UserPage'
import LoadingView from './LoadingView'
import FeedPet from './FeedPet'
import EditPet from './EditPet'

const App = () => (
  <div>
    <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path='/home' component={Home}/>
  <Route path='/createpet' component={CreatePet}/>
  <Route path='/petpage' component={PetPage}/>
  <Route path='/userpage' component={UserPage}/>
  <Route path='/loading' component={LoadingView}/>
  <Route path='/feedpet' component={FeedPet}/>
  <Route path='/editpet' component={EditPet}/>
    </Switch>
  </div>
)

export default withRouter(App)
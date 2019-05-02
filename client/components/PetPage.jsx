import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { petHunger } from '../actions/petInfo'
import {format, differenceInHours} from 'date-fns'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import Button from '@react95/core/Button'
import HungerProgressBar from './HungerProgressBar'
import UserPage from './UserPage'
import Home from './Home'
import CreatePet from './CreatePet'
import FeedPet from './FeedPet'

class PetPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          createPetPageClicked: false,
          userPageClicked: false,
          feedPetClicked: false
        }
        this.checkLastFed = this.checkLastFed.bind(this)
        this.logoutUser = this.logoutUser.bind(this) 
        this.handleClickIcon = this.handleClickIcon.bind(this)
        this.redirect = this.redirect.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedin  === true) {
          this.props.history.push('/petpage')
      } else {
          this.props.history.push('/')
      } 
    }

    logoutUser() {
      this.props.dispatch(logout(this.props.userN))
    }

    redirect() {
      this.context.history.push('/')
    }

    handleClickIcon(icon) {
       if(icon === 'createPetPage'){
         this.setState({createPetPageClicked: true})
       } else if (icon === 'userPage') {
         this.setState({userPageClicked: true})
       } else if (icon === 'feedPet') {
        this.setState({feedPetClicked: true}) 
      } this.state
     }

    checkLastFed() {
      let currentDate = format(new Date)
      console.log(currentDate)
      let lastfed = format(this.props.lastFed)
      console.log(lastfed)
      let diff = differenceInHours(currentDate, lastfed)
      console.log(diff)
      if (diff > 24)
      {
      //if time diff is more than 24 hours dispatch pethunger to true
      this.props.dispatch(petHunger(true))
      } else {
      //else dispatch false
        this.props.dispatch(petHunger(false))
      }
    }
    

      render() {

        return (
          
            <div>

                <div className='home-container'>
                  <Link style={{textDecoration: 'none'}} className='home-row-col1'><img src='/images/createPetIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('createPetPage')}}/>
                  <h3 className='landing-text'>Create a pet</h3></Link>

                <Link style={{textDecoration: 'none'}} className='home-row-col2'><img src='/images/userPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('userPage')}}/>
                <h3 className='landing-text'>User page</h3></Link>

                <Link style={{textDecoration: 'none'}} className='home-row-col3'><img src='/images/petPageIcon.png' style={{width: '6vw', height: '9vh'}}/>
                <h3 className='landing-text'>Pet page</h3></Link>

                <Link style={{textDecoration: 'none'}} className='home-row-col4' to='/' onClick={() => this.redirect()}>
                  <img src='/images/logoutIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.logoutUser()}}/>
                <h3 className='landing-text'>Logout</h3></Link>
                <br/><br/>
                </div>

                <div style={{marginLeft: '25vw', fontFamily: "'Caveat Brush', cursive", marginTop: '2.5vh'}}>
              
              <Tabs
               style={{ width: '70vw'}}
               defaultActiveTab="Pet Page">

               <Tab title='Home'>
                 <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                 <Home/>
                 </Fieldset>
               </Tab>

               <Tab title="Pet Page">
                 <Fieldset legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>
                <div className='petPage-title-container'>
                 <h3 className='petPage-title'>Welcome to {this.props.petName}'s page!</h3>
             </div>

            <div className='petPage-container'>

                 {this.props.petType ? <img className='petPage-row-col1 petPage-grid-images' src={this.props.petImage}/> 
                : <div className='petPage-row-col1 petPage-grid-images'></div>}

                <h3 className='petPage-row-col10 petPage-text'>
             
                <Button onClick={() => {this.checkLastFed(); this.handleClickIcon('feedPet')}}>Feed {this.props.petName}</Button>
                </h3>
                </div>

                <div className='petPage-container2'>
                <h3 className='petPage-row-col2 petPage-text'>
                Owner:
                </h3>
                <h3 className='petPage-row-col3 petPage-text'>{this.props.username}</h3>
                <h3 className='petPage-row-col4 petPage-text'>
                Habitat:
                </h3>
                <h3 className='petPage-row-col5 petPage-text'>{this.props.habitat}</h3>
                <h3 className='petPage-row-col6 petPage-text'>
                Activity:
                </h3>
                <h3 className='petPage-row-col7 petPage-text'>{this.props.activity}</h3>
                <h3 className='petPage-row-col8 petPage-text'>
                Age:
                </h3>
                <h3 className='petPage-row-col9 petPage-text'>{this.props.petAge} days old</h3>
                <h3 className='petPage-row-col11 petPage-text'>
                Hunger:
                </h3>
                <h3 className='petPage-row-col12 petPage-text'> 
                <HungerProgressBar/>
                </h3>
                
               </div>
                
                  </Fieldset>
                  </Tab>

                  {this.state.createPetPageClicked ? 
                <Tab title='Create A Pet'>
                <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>         
                  <CreatePet/>
                </Fieldset>
                </Tab> 
                : <Tab>
                  <div></div>
                </Tab>}
     
               {this.state.userPageClicked ? 
               <Tab title='User Page'>
               <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
                  <UserPage/>
                 </Fieldset>
                </Tab> 
                : <Tab>
                  <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                  </Fieldset>
                </Tab>}


                {this.state.feedPetClicked ? 
               <Tab title='Feed Your Pet'>
               <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
                  <FeedPet/>    
                 </Fieldset>
                </Tab> 
                : <Tab>
                  <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                  </Fieldset>
                </Tab>}

                  </Tabs>
               </div>
               
                
           </div>
        )

      } 
}

function mapStateToProps (state) {
    return {
        loggedin: state.login.loggedin,
        username: state.login.username,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        habitat: state.getPetInfo.habitat,
        activity: state.getPetInfo.activity,
        petImage: state.getPetInfo.petImage,
        fed: state.getPetInfo.fed,
        lastFed: state.getPetInfo.lastFed,
        petCreated: state.getPetInfo.petCreated,
        petAge: state.getPetInfo.petAge
    }
  }
  
  export default withRouter(connect(mapStateToProps)(PetPage))


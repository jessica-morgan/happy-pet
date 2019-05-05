import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {format, differenceInDays} from 'date-fns'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import { getUser, initialiseUserData, checkIfUserHasPet } from '../actions/users'
import { getUsersPetInfo, getPetImage } from '../actions/petInfo'
import { initialiseLoginData } from '../actions/login'
import { petAge, initialisePetData } from '../actions/petInfo'
import { initialiseRegisterData } from '../actions/register'
import CreatePet from './CreatePet'
import UserPage from './UserPage'
import PetPage from './PetPage'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            createPetClicked: false,
            userPageClicked: false,
            petPageClicked: false
        }
        this.handleClickUserInfo = this.handleClickUserInfo.bind(this)
        this.handleClickPetInfo = this.handleClickPetInfo.bind(this)
        this.handleClickPetImage = this.handleClickPetImage.bind(this)
        this.handleClickIcon = this.handleClickIcon.bind(this)
        this.redirect = this.redirect.bind(this)
        this.getPetAge = this.getPetAge.bind(this)
        this.inititaliseLoginState = this. inititaliseLoginState.bind(this)
        this.initialisepetInfoState = this.initialisepetInfoState.bind(this)
        this.initialiseRegisterState = this. initialiseRegisterState.bind(this)
        this.initialiseUserState = this.initialiseUserState.bind(this)
        this.checkIfHasPet = this.checkIfHasPet.bind(this)

      }

      componentDidMount () {
        if (this.props.loggedIn === true) {
          this.props.history.push('/home')
      } else {
          this.props.history.push('/')
      } 
    }
      //event handler gets user info from db dispatch to redux
      handleClickUserInfo() {
        this.props.dispatch(getUser(this.props.username))
      }

      handleClickPetInfo() {
        this.props.dispatch(getUsersPetInfo(this.props.username))
      }

      getPetAge() {
        let created = format(this.props.petCreated)
        let currentDate = format(new Date())
        let age = differenceInDays(currentDate, created)
        this.props.dispatch(petAge(age))
      }

      //sets pet image url to state.getPetInfo.petImage
      handleClickPetImage() {
        this.props.dispatch(getPetImage(this.props.pettype))
      }

      handleClickIcon(icon) {
        if (icon === 'createPetPage') {
          this.setState({createPetClicked: true})
        } else if (icon === 'userPage') {
          this.setState({userPageClicked: true})
        } else if (icon === 'petPage') {
          this.setState({petPageClicked: true})
        } this.state
      }

      checkIfHasPet(){
        this.props.dispatch(checkIfUserHasPet(this.props.username))
      }

      inititaliseLoginState() {
        this.props.dispatch(initialiseLoginData())
      }
  
      initialisepetInfoState() {
        this.props.dispatch(initialisePetData())
      }
  
      initialiseRegisterState() {
        this.props.dispatch(initialiseRegisterData())
      }
  
      initialiseUserState() {
        this.props.dispatch(initialiseUserData())
      }

      redirect() {
        this.context.history.push('/')
      }

      render() {
   
        return (
        <div>
          
          <div className='home-container'>

          {this.props.hasPet ? 
           <div className='home-row-col1' style={{width: '6vw', height: '9vh'}}></div>
          : <Link style={{textDecoration: 'none'}} className='home-row-col1'><img src='/images/createPetIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => this.handleClickIcon('createPetPage')}/>
          <h3 className='landing-text'>Create a pet</h3></Link>}

          <Link style={{textDecoration: 'none'}} className='home-row-col2'><img src='/images/userPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage(); this.handleClickIcon('userPage'); this.checkIfHasPet()}}/>
         <h3 className='landing-text'>User page</h3></Link>

         <Link style={{textDecoration: 'none'}} className='home-row-col4' to='/' onClick={() => this.redirect()}>
          <img src='/images/logoutIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.initialiseRegisterState(); this.initialiseUserState(); this.inititaliseLoginState(); this.initialisepetInfoState()}}/>
        <h3 className='landing-text'>Logout</h3></Link>
        <br/><br/>

         {this.props.hasPet ? 
          <Link style={{textDecoration: 'none'}} className='home-row-col3'><img src='/images/petPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('petPage'); this.checkIfHasPet()}}/>
          <h3 className='landing-text'>Pet page</h3></Link> : <div style={{width: '6vw', height: '9vh'}}></div>}
      
        </div>
          
          <div style={{marginLeft: '25vw', fontFamily: "'Caveat Brush', cursive", marginTop: '2.5vh'}}>
              
         <Tabs
          style={{ width: '70vw'}}
          defaultActiveTab="Home">

           <Tab title="Home">
            <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
              
            <h3 style={{fontSize: '7vw', textAlign: 'center', marginTop: '10vh'}} className='happy-pet-title'>Happy Pet</h3>
              <h2 style={{marginTop: '12vh'}} className='welcome'>Hi {this.props.username}!</h2>
              <h2 style={{fontSize: '1.5vw', marginTop: '3vh'}} style={{fontFamily: "'Times New Roman', Times, serif", fontSize: '1.1vw', color: 'black', textAlign: 'center'}}>Get started by clicking an icon on the left</h2>

       </Fieldset>
      </Tab>
      
          {this.state.createPetClicked ? 
          <Tab title='Create A Pet'>
          <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
           <div>
            <CreatePet/>
            </div>
          </Fieldset>
          </Tab> 
          : <Tab>
            <div></div>
          </Tab>}

          {this.state.userPageClicked ? 
          <Tab title='User Page'>
          <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
            <div>
            <UserPage/>
            </div>
          </Fieldset>
          </Tab> 
          : <Tab>
            <div></div>
          </Tab>}

          {this.state.petPageClicked ? 
          <Tab title='PetPage'>
          <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
           <div>
             <PetPage/>
             </div>
            </Fieldset>
           </Tab> 
           : <Tab>
             <div></div>
           </Tab>}

          </Tabs>
         </div>
        </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        userN: state.user.username,
        username: state.login.username,
        loggedIn: state.login.loggedin,
        pettype: state.getPetInfo.petType,
        petCreated: state.getPetInfo.petCreated,
        hasPet: state.user.hasPet
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home))


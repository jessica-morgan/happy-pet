import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Button from '@react95/core/Button'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import { getUser } from '../actions/users'
import { getUsersPetInfo, getPetImage } from '../actions/petInfo'
import { logout } from '../actions/login'
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
        this.logoutUser = this.logoutUser.bind(this) 
        this.handleCreatePetClick = this.handleCreatePetClick.bind(this)
        this.handleUserPageClick = this.handleUserPageClick.bind(this)
        this.handlePetPageClick = this.handlePetPageClick.bind(this)  
      }

      componentDidMount () {
        if (this.props.loggedIn  === true) {
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
      //sets pet image url to state.getPetInfo.petImage
      handleClickPetImage() {
        this.props.dispatch(getPetImage(this.props.pettype))
      }

      handleCreatePetClick() {
        this.setState({createPetClicked: true})
      }

      handleUserPageClick() {
        this.setState({userPageClicked: true})
      }

      handlePetPageClick() {
        this.setState({petPageClicked: true})
      }

      logoutUser() {
        this.props.dispatch(logout(this.props.userN))
      }

      redirect() {
        this.context.history.push('/')
      }

      render() {
   
        return (
        <div>
          <div className='home-container'>
          <Link style={{textDecoration: 'none'}} className='home-row-col1'><img src='/images/createPetIcon.png' style={{width: '58px', height: '50px'}} onClick={() => this.handleCreatePetClick()}/>
           <h3 className='landing-text'>Create a pet</h3></Link>

          <Link style={{textDecoration: 'none'}} className='home-row-col2'><img src='/images/userPageIcon.png' style={{width: '58px', height: '57px'}} onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage(); this.handleUserPageClick()}}/>
         <h3 className='landing-text'>User page</h3></Link>

         <Link style={{textDecoration: 'none'}} className='home-row-col3'><img src='/images/petPageIcon.png' style={{width: '58px', height: '57px'}} onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage(); this.handlePetPageClick()}}/>
         <h3 className='landing-text'>Pet page</h3></Link>

        <Link style={{textDecoration: 'none'}} className='home-row-col4' to='/' onClick={() => this.redirect()}>
          <img src='/images/logoutIcon.png' style={{width: '58px', height: '50px'}} onClick={() => {this.logoutUser()}}/>
        <h3 className='landing-text'>Logout</h3></Link>
        <br/><br/>
        </div>
          
          <div style={{marginLeft: '25vw', fontFamily: "'Caveat Brush', cursive", marginTop: '2.5vh'}}>
              
         <Tabs
          style={{ width: '70vw', fontSize: '13px'}}
          defaultActiveTab="Home">

           <Tab title="Home">
            <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
              
            <h3 style={{fontSize: '7vw', textAlign: 'center', marginTop: '10vh'}} className='happy-pet-title'>Happy Pet</h3>
              <h2 style={{marginTop: '12vh'}} className='welcome'>Hi {this.props.userN}!</h2>
              <h2 style={{fontSize: '1.5vw', marginTop: '3vh'}} className='welcome'>Get started by clicking an icon on the left</h2>

       </Fieldset>
      </Tab>
         
          {/*(and take the icon away from the desktop?) */}
          {/* components are not rendering in tabs atm- tab will appear but when clicked on just redirects to page route */}
          {this.state.createPetClicked ? 
          <Tab title='Create A Pet'>
          <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
            <CreatePet/>
          </Fieldset>
          </Tab> 
          : <Tab></Tab>}

          {this.state.userPageClicked ? 
          <Tab title='User Page'>
          <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
            <UserPage/>
          </Fieldset>
          </Tab> 
          : <Tab></Tab>}

          {this.state.petPageClicked ? 
          <Tab title='PetPage'>
          <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
            <PetPage/>
          </Fieldset>
          </Tab> 
          : <Tab></Tab>}

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
        pettype: state.getPetInfo.petType
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home))


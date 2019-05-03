import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { feedPetApi } from '../api/pets'
import {format} from 'date-fns'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import Button from '@react95/core/Button'
import UserPage from './UserPage'
import Home from './Home'
import CreatePet from './CreatePet'
import PetPage from './PetPage'

class FeedPet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          hunger: false,
          username: '',
          createPetPageClicked: false,
          userPageClicked: false,
          petPageClicked: false
        }
        this.feedPet = this.feedPet.bind(this) 
        this.refresh = this.refresh.bind(this)
        this.logoutUser = this.logoutUser.bind(this) 
        this.handleClickIcon = this.handleClickIcon.bind(this)
        this.redirect = this.redirect.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedin  === true) {
          console.log('hello')
          this.props.history.push('/feedpet')
      } else {
          this.props.history.push('/')
    } 
   }

    feedPet() {
     let currentTime = format(new Date())
     let user = this.props.username
     feedPetApi(user, currentTime)
    }

    refresh() {
      this.setState({ state: this.state });
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

      render() {
       
 
        return (
        
           <div>

              <div className='home-container'>
                  <Link style={{textDecoration: 'none'}} className='home-row-col1'><img src='/images/createPetIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('createPetPage')}}/>
                  <h3 className='landing-text'>Create a pet</h3></Link>

                <Link style={{textDecoration: 'none'}} className='home-row-col2'><img src='/images/userPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('userPage')}}/>
                <h3 className='landing-text'>User page</h3></Link>

                {this.props.hasPet ? 
                <Link style={{textDecoration: 'none'}} className='home-row-col3'><img src='/images/petPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('petPage')}}/>
                <h3 className='landing-text'>Pet page</h3></Link> : <div style={{width: '6vw', height: '9vh'}}></div>}

                <Link style={{textDecoration: 'none'}} className='home-row-col4' to='/' onClick={() => this.redirect()}>
                  <img src='/images/logoutIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.logoutUser()}}/>
                <h3 className='landing-text'>Logout</h3></Link>
                <br/><br/>
                </div>

                <div style={{marginLeft: '25vw', fontFamily: "'Caveat Brush', cursive", marginTop: '2.5vh'}}>
              <Tabs
               style={{ width: '70vw'}}
               defaultActiveTab="Feed Your Pet">
                        
               <Tab title='Home'>
                 <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                 <Home/>
                 </Fieldset>
               </Tab>

              
               <Tab title="Feed Your Pet">
                 <Fieldset legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>
                <div className='petPage-title-container'>
                 <h1 style={{marginTop: '3vh'}} className='petPage-title'>Feed {this.props.petName}!</h1>
                 </div>
                 <div >    
                 {this.props.petType ? <img className='feed-pet-row-col1' style={{width: '25vw', height: '37vh'}} src={this.props.petImage}/> 
                : <div className='feed-pet-row-col1 styles.petPage-grid-images'></div>}
                  <br/>
                  
                  <br/>

                  {this.props.hunger ? <h3 className='feed-pet-row-col2 petPage-stats-title'>
                   <Button onClick={() => {this.feedPet(this.props.username); this.refresh()}}>Feed {this.props.petName}</Button></h3> 
                   : <h3 className='feed-pet-row-col2 petPage-stats-title'>I'm full!</h3>}

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


                {this.state.petPageClicked ? 
               <Tab title='Pet Page'>
               <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
                  <PetPage/>    
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
        username: state.user.username,
        petImage: state.getPetInfo.petImage,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        fed: state.getPetInfo.fed,
        lastFed: state.getPetInfo.lastFed,
        hunger: state.getPetInfo.hunger,
        hasPet: state.user.hasPet,
        userN: state.login.username
    }
  }
  
  export default withRouter(connect(mapStateToProps)(FeedPet))
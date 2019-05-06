import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { updatePetApi } from '../api/pets'
import { initialiseUserData, checkIfUserHasPet } from '../actions/users'
import { initialiseLoginData } from '../actions/login'
import { initialisePetData, updatedPetInfo } from '../actions/petInfo'
import { initialiseRegisterData } from '../actions/register'
import Input from '@react95/core/Input'
import Button from '@react95/core/Button'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import UserPage from './UserPage'
import PetPage from './PetPage'
import Home from './Home'

class EditPet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            petType: '',
            petName: '',
            habitat: '',
            activity: '',
            petImageUrl: '',
            userPageClicked: false,
            petPageClicked: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClickIcon = this.handleClickIcon.bind(this)
        this.redirect = this.redirect.bind(this)
        this.inititaliseLoginState = this. inititaliseLoginState.bind(this)
        this.initialisepetInfoState = this.initialisepetInfoState.bind(this)
        this.initialiseRegisterState = this. initialiseRegisterState.bind(this)
        this.initialiseUserState = this.initialiseUserState.bind(this)
        this.dispatchNewPetInfo = this.dispatchNewPetInfo.bind(this)
        this.checkIfHasPet = this.checkIfHasPet.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedIn  === true) {
          this.props.history.push('/editpet')
      } else {
          this.props.history.push('/')
      } 
    }

    handleClickIcon(icon) {
     if (icon === 'userPage') {
        this.setState({userPageClicked: true})
      } else if (icon === 'petPage') {
        this.setState({petPageClicked: true})
      } this.state
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


      handleChange(event) {
          //sets state with pet info input
        this.setState({ [event.target.name]: event.target.value });
      }

      handleSubmit(username) {
        //dispatch component state to redux petinfo
        
        const {petName, habitat, activity} = this.state
        updatePetApi(username, petName, habitat, activity)
      }

      checkIfHasPet(){
        this.props.dispatch(checkIfUserHasPet(this.state.loginUsername))
      }

      dispatchNewPetInfo() {
        this.props.dispatch(updatedPetInfo(this.state.petName, this.state.habitat, this.state.activity))
      }

      render() {
   

        return (
        
            <div>

                  <div className='home-container'>
                  {this.props.hasPet ? 
                  <div className='home-row-col1' style={{width: '6vw', height: '9vh'}}></div>
                  : <Link style={{textDecoration: 'none'}} className='home-row-col1'><img src='/images/createPetIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => this.handleClickIcon('createPetPage')}/>
                  <h3 className='landing-text'>Create a pet</h3></Link>}

                  <Link style={{textDecoration: 'none'}} className='home-row-col2'><img src='/images/userPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('userPage'); this.checkIfHasPet()}}/>
                <h3 className='landing-text'>User page</h3></Link>

                {this.props.hasPet ? 
                <Link style={{textDecoration: 'none'}} className='home-row-col3'><img src='/images/petPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('petPage'); this.checkIfHasPet()}}/>
                <h3 className='landing-text'>Pet page</h3></Link> : <div style={{width: '6vw', height: '9vh'}}></div>}

                <Link style={{textDecoration: 'none'}} className='home-row-col4' to='/' onClick={() => this.redirect()}>
                  <img src='/images/logoutIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => { this.initialiseRegisterState(); this.initialiseUserState(); this.inititaliseLoginState(); this.initialisepetInfoState()}}/>
                <h3 className='landing-text'>Logout</h3></Link>
                <br/><br/>
                </div>


              <div style={{marginLeft: '25vw', fontFamily: "'Caveat Brush', cursive", marginTop: '2.5vh'}}>
              
              <Tabs
               style={{ width: '70vw'}}
               defaultActiveTab="Edit Pet">

               <Tab title='Home'>
                 <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                 <Home/>
                 </Fieldset>
               </Tab>
     
                <Tab title="Edit Pet">
                 <Fieldset  legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>

              <div>
                 {/* show pet image here */}
                 
                 <img className='pet-image-container chosen-pet' src={this.props.petImage}/> 
                
              </div>        

                {/* where inputted name, habitat and activity are shown */}
                  <div className='edit-pet-container'>

                  {/* heading that says enter the information you would like to change */}
                  <h3 className='input-rowcol1 createpet-text'>
                Name:
                </h3>
                {this.state.petName.length > 0 ? <h3 className='input-rowcol2 createpet-text petInfo-text-container'> {this.state.petName}</h3>
                : <div className='input-rowcol2 createpet-text petInfo-text-container'></div>}
                <h3 className='input-rowcol3 createpet-text'>
                Habitat:
                </h3>
                {this.state.habitat.length > 0 ? <h3 className='input-rowcol4 createpet-text petInfo-text-container'> {this.state.habitat}</h3>
                : <div className='input-rowcol4 createpet-text petInfo-text-container'></div>}
                <h3 className='input-rowcol5 createpet-text'>
                Activity:
                </h3>
                {this.state.activity.length > 0 ? <h3 className='input-rowcol6 createpet-text petInfo-text-container'> {this.state.activity}</h3>
                : <div className='input-rowcol6 createpet-text petInfo-text-container'> </div>}
                </div>

               <div className='edit-input-container'>
              
                {/* inputs for name, habitat and activity */}
                <h3 className='input-rowcol7 createpet-text'>Give your pet a name:</h3>
                    <Input style={{marginTop: '3vh'}} className='input-rowcol7 createpet-text' type='text' name='petName' id='petName' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='input-rowcol8 createpet-text'>Where does your pet live?</h3>
                    <Input style={{marginTop: '3vh'}} className='input-rowcol8 createpet-text' type='text' name='habitat' id='habitat' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='input-rowcol9 createpet-text'>What does your pet like to do?</h3>
                    <Input style={{marginTop: '3vh'}} className='input-rowcol9 createpet-text' type='text' name='activity' id='activity'onChange={this.handleChange}/>
                  
                <h3 className='input-rowcol7 createpet-text'>Give your pet a name:</h3>
                    
                    {this.state.petName && this.state.habitat && this.state.activity &&
                    <Link className='input-rowcol10 createpet-text' to='/petpage'>
                    <Button onClick={() => {this.handleSubmit(this.props.userN); this.dispatchNewPetInfo()}}>Enter</Button> 
                    </Link>
                    }
                  </div>
            </Fieldset>
           </Tab>
     
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
               <Tab title='PetPage'>
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
        loggedIn: state.login.loggedin,
        ownerName: state.user.username,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        habitat: state.getPetInfo.habitat,
        activity: state.getPetInfo.activity,
        petImage: state.getPetInfo.petImage,
        hasPet: state.user.hasPet,
        userN: state.login.username
    }
  }
  
  export default withRouter(connect(mapStateToProps)(EditPet))


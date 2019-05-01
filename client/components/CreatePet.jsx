import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { newpetApi } from '../api/pets'
import Input from '@react95/core/Input'
import Button from '@react95/core/Button'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import UserPage from './UserPage'
import PetPage from './PetPage'
import Home from './Home'

class CreatePet extends React.Component {
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
        this.setPetImage = this.setPetImage.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logoutUser = this.logoutUser.bind(this) 
        this.handleClickIcon = this.handleClickIcon.bind(this)
        this.redirect = this.redirect.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedIn  === true) {
          this.props.history.push('/createpet')
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

    logoutUser() {
      this.props.dispatch(logout(this.props.userN))
    }

    redirect() {
      this.context.history.push('/')
    }

      setPetImage (imgurl) {
        this.setState({petImageUrl: imgurl})
    }

      handleChange(event) {
          //sets state with pet info input
        this.setState({ [event.target.name]: event.target.value });
      }

      handleSubmit() {
        //dispatch component state to redux petinfo
        const owner = this.props.ownerName
        const {petType, petName, habitat, activity} = this.state
        newpetApi(owner, petType, petName, habitat, activity)
      }

      render() {
   

        return (
        
            <div>

                  <div className='home-container'>
                  <Link style={{textDecoration: 'none'}} className='home-row-col1'><img src='/images/homeIcon.png' style={{width: '6vw', height: '9vh'}}/>
                  <h3 className='landing-text'>Home</h3></Link>

                  <Link style={{textDecoration: 'none'}} className='home-row-col2'><img src='/images/userPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage(); this.handleClickIcon('userPage')}}/>
                <h3 className='landing-text'>User page</h3></Link>

                <Link style={{textDecoration: 'none'}} className='home-row-col3'><img src='/images/petPageIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage(); this.handleClickIcon('petPage')}}/>
                <h3 className='landing-text'>Pet page</h3></Link>

                <Link style={{textDecoration: 'none'}} className='home-row-col4' to='/' onClick={() => this.redirect()}>
                  <img src='/images/logoutIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.logoutUser()}}/>
                <h3 className='landing-text'>Logout</h3></Link>
                <br/><br/>
                </div>


              <div style={{marginLeft: '25vw', fontFamily: "'Caveat Brush', cursive", marginTop: '2.5vh'}}>
              
              <Tabs
               style={{ width: '70vw'}}
               defaultActiveTab="Create A Pet">

               <Tab title='Home'>
                 <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                 <Home/>
                 </Fieldset>
               </Tab>
     
                <Tab title="Create A Pet">
                 <Fieldset  legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>
                   
                {/* pets to choose from */}
                <div className='createpet-container'>
                <h3 className='row-col1' style={{fontFamily: "'Times New Roman', Times, serif", fontSize: '1.3vw', color: 'black', textAlign: 'center'}}>Create your pet</h3>
                <img id='monkey' className='row-col2 grid-images' src='/images/monkeyPetIcon.png' onClick={() => {this.setPetImage('/images/monkeyPetIcon.png')}}/>
                <img id='mouse' className='row-col3 grid-images' src='/images/mousePetIcon.png' onClick={() => {this.setPetImage('/images/mousePetIcon.png')}}/>
                <img id='cat' className='row-col4 grid-images' src='images/catPetIcon.png' onClick={() => {this.setPetImage('images/catPetIcon.png')}}/>
                <img id='bunny' className='row-col5 grid-images' src='/images/bunnyPetIcon.png' onClick={() => {this.setPetImage('images/bunnyPetIcon.png')}}/>
                 
              </div>  

              <div>
                 {/* shows chosen pet */}
                 {this.state.petImageUrl ? 
                 <img className='chosen-pet-container chosen-pet' src={this.state.petImageUrl}/> :
                 <div className='chosen-pet-container chosen-pet'></div>
                  }
              </div>        

                {/* where inputted name, habitat and activity are shown */}
                  <div className='petinfo-container'>
                  <h3 className='input-rowcol1 createpet-text'>
                Name:
                </h3>
                {/* RESTYLE THESE COLUMNS */}
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

               <div className='input-container'>
              
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
                    <Link className='input-rowcol10 createpet-text' to='/home'>
                    <Button onClick={() => {this.handleSubmit(this.state)}}>Enter</Button>
                    </Link>   
                  </div>
            </Fieldset>
           </Tab>
              
               {this.state.homeClicked ? 
               <Tab title='Home'>
               <Fieldset className='happy-pet-title' legend='Happy Pet' style={{ marginBottom: '1em', height: '80vh' }}>
                <div>
                 <Home/>
                 </div>
               </Fieldset>
               </Tab> 
               : <Tab>
                 <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                  </Fieldset>
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
                 <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                  </Fieldset>
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
        ownerName: state.login.username,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        habitat: state.getPetInfo.habitat,
        activity: state.getPetInfo.activity,
        petImage: state.getPetInfo.petImgUrl
    }
  }
  
  export default withRouter(connect(mapStateToProps)(CreatePet))


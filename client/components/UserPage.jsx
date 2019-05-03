import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {format} from 'date-fns'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import PetPage from './PetPage'
import Home from './Home'
import CreatePet from './CreatePet'

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          createPetPageClicked: false,
          petPageClicked: false
        } 
        this.logoutUser = this.logoutUser.bind(this) 
        this.handleClickIcon = this.handleClickIcon.bind(this)
        this.redirect = this.redirect.bind(this)
      }   

      componentDidMount () {
        if (this.props.loggedin  === true) {
          this.props.history.push('/userpage')
      } else {
          this.props.history.push('/')
      } 
    }

    //when click on pet page link calculate pets age using this.props.petCreated state.getPetInfo.petCreated
    

    logoutUser() {
      this.props.dispatch(logout(this.props.userN))
    }

    redirect() {
      this.context.history.push('/')
    }

    handleClickIcon(icon) {
       if(icon === 'createPetPage'){
         this.setState({createPetPageClicked: true})
       } else if (icon === 'petPage') {
         this.setState({petPageClicked: true})
       }
       this.state
     }

      render() {

       const accountCreated = format(this.props.acctCreated, 'MMMM/YYYY')
 
        return (
        
            <div>

              <div className='home-container'>
                  <Link style={{textDecoration: 'none'}} className='home-row-col1'><img src='/images/createPetIcon.png' style={{width: '6vw', height: '9vh'}} onClick={() => {this.handleClickIcon('createPetPage')}}/>
                  <h3 className='landing-text'>Create a pet</h3></Link>

                <Link style={{textDecoration: 'none'}} className='home-row-col2'><img src='/images/userPageIcon.png' style={{width: '6vw', height: '9vh'}}/>
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
               defaultActiveTab="User Page">

               <Tab title='Home'>
                 <Fieldset style={{ marginBottom: '1em', height: '80vh' }}>
                 <Home/>
                 </Fieldset>
               </Tab>

               <Tab title="User Page">
                 <Fieldset legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>
                <div className='petPage-title-container'>
                 <h3 className='petPage-title' style={{textAlign: 'center'}}>Welcome to {this.props.username}'s page!</h3>
                </div>

                <div className='user-info-container1'>
                 {/* shows user info */}
                 <h3 className='userPage-row-col1 userpage-text'>Username:</h3>
                 <h3 className='userPage-row-col4 userpage-text'>{this.props.username}</h3>
                 <h3 className='userPage-row-col2 userpage-text'>Name:</h3>
                 <h3 className='userPage-row-col5 userpage-text'>{this.props.firstname}</h3>
                 <h3 className='userPage-row-col9 userpage-text'>Joined:</h3>
                 <h3 className='userPage-row-col10 userpage-text'>{accountCreated}</h3>
                 <h3 className='userPage-row-col11 userpage-text'>Status:</h3>
                 {this.props.loggedin === true ? <h3 className='userPage-row-col12 userpage-text'>Online</h3> 
                 : <h3 className='userPage-row-col12 userpage-text'>Offline</h3>}
                </div>

                 {/* shows pet image and link to page */}
                 {this.props.hasPet ?  <div className='user-info-container2'>
                 <img src={this.props.petimage} className='userPage-petimg'></img>
                 <Link className='userPage-row-col8' style={{textDecoration: 'none'}} onClick = {() => {this.handleClickIcon('petPage')}}>
                 <h3 className='userPage-row-col7 userpage-text'>Visit {this.props.petname}'s page</h3>
                 </Link></div>
                : <div className='user-info-container2'>
                  <h3 style={{fontSize: '2vw', fontFamily: "'Times New Roman', Times, serif", color: 'black', marginTop: '15vh'}} >You don't have a pet yet!</h3>
                </div>}
                
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
        username: state.login.username,
        firstname: state.user.firstname,
        acctCreated: state.user.acctCreated,
        loggedin: state.login.loggedin,
        pettype: state.getPetInfo.petType,
        petname: state.getPetInfo.petName,
        petimage: state.getPetInfo.petImage,
        petCreated: state.getPetInfo.petCreated,
        hasPet: state.user.hasPet,
        hasPet: state.user.hasPet,
        userN: state.login.username
    }
  }
  
  export default withRouter(connect(mapStateToProps)(UserPage))



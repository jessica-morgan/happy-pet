import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Button from '@react95/core/Button'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import Input from '@react95/core/Input'
import { getUser } from '../actions/users'
import { getUsersPetInfo, getPetImage } from '../actions/petInfo'
import { logout } from '../actions/login'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
        this.handleClickUserInfo = this.handleClickUserInfo.bind(this)
        this.handleClickPetInfo = this.handleClickPetInfo.bind(this)
        this.handleClickPetImage = this.handleClickPetImage.bind(this)
        this.logoutUser = this.logoutUser.bind(this)   
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

      logoutUser() {
        this.props.dispatch(logout(this.props.userN))
      }

      redirect() {
        this.context.history.push('/')
      }

      render() {
   
        return (
        
            <div style={{marginLeft: '25vw', fontFamily: "'Bonbon', cursive"}}>
              
         <Tabs
          style={{ width: '70vw'}}
          defaultActiveTab="Home">

           <Tab title="Home">
            <Fieldset legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>
              <br/>
              <h2 className='welcome'>Hi {this.props.userN}!</h2>
              <br/>

                <div className='home-container'>
                   <Link style={{textDecoration: 'none'}} className='home-row-col1' to='/createpet'><img src='/images/lightBulbIcon.png' style={{width: '58px', height: '70px'}}/>
                    <h3 className='landing-text'>Create a pet</h3></Link>
                   <Link style={{textDecoration: 'none'}} className='home-row-col2' to='/userpage'><img src='/images/userPageIcon.png' style={{width: '58px', height: '70px'}} onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage()}}/>
                  <h3 className='landing-text'>User page</h3></Link>

                 {/* the history.push isn't working but logs user out */}
                 <Link style={{textDecoration: 'none'}} className='home-row-col3' to='/' onClick={() => this.redirect()}>
              <img src='/images/logoutIcon.png' style={{width: '58px', height: '60px'}} onClick={() => {this.logoutUser()}}/>
           <h3 className='landing-text'>Logout</h3></Link>
        <br/><br/>
       </div>
      </Fieldset>
     </Tab>


               
    </Tabs>
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


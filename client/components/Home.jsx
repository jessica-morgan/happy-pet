import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
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
          this.props.history.push('/login')
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

      render() {
   
        return (
        
            <div>
                <div>
                 <br/><br/>
                  <h3 style={{fontSize: '40px',textDecoration: 'bold', textAlign: 'center', fontFamily: 'Coda, cursive', textShadow: '4px 4px grey', color: 'rgb(63, 69, 74)'}}>Welcome {this.props.userN}</h3>
                 <br/>
                </div>

                <div className='home-container'>
                    <Link style={{textDecoration: 'none'}} className='home-row-col1' to='/createpet'><img src='/images/lightBulbIcon.png' style={{width: '58px', height: '70px'}}/>
                    <h3 className='landing-text'>Create a pet</h3></Link>
                    <Link style={{textDecoration: 'none'}} className='home-row-col2' to='/userpage'><img src='/images/userPageIcon.png' style={{width: '58px', height: '70px'}} onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage()}}/>
                    <h3 className='landing-text'>User page</h3></Link>

                 {/* the history.push isn't working but logs user out */}
                 <Link style={{textDecoration: 'none'}} className='home-row-col3' to='/login'>
              <img src='/images/logoutIcon.png' style={{width: '58px', height: '60px'}} onClick={() => {this.logoutUser(); this.props.history.push('/login')}}/>
              <h3 className='landing-text'>Logout</h3></Link>

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


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
                <h3 className='landing-text'>Welcome {this.props.registeredName}</h3>
                </div>

                <div>
                    <Link style={{textDecoration: 'none'}} to='/createpet'><button className='button'>Create a pet</button></Link>
                </div>
                    <Link style={{textDecoration: 'none'}} to='/userpage'><button className='button' onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo(); this.handleClickPetImage()}}>User page</button></Link>

                 {/* the history.push isn't working but logs user out */}
              <button className='button' onClick={() => {this.logoutUser(); this.props.history.push('/login')}}>Logout</button>



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


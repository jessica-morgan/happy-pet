import React from 'react'
import {Redirect, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { getUser } from '../actions/users'
import { getUsersPetInfo } from '../actions/petInfo';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
 
      }

      //event handler that gets user info from db dispatch to redux
      handleClickUserInfo() {
        this.props.dispatch(getUser(this.props.username))
      }

      handleClickPetInfo() {
        this.props.dispatch(getUsersPetInfo(this.props.username))
      }

      render() {

        if (this.props.loggedIn  === 1) {
          return this.props.history.push('/home')
        } else {
            this.props.history.push('/login')
        }    
  
        return (
        
            <div>
                <div>
                <h3 className='landing-text'>Welcome {this.props.registeredName}</h3>
                </div>

                <div>
                    <Link style={{textDecoration: 'none'}} to='/createpet'><button>Create a pet</button></Link>
                </div>
                    <Link style={{textDecoration: 'none'}} to='/userpage'><button onClick={() => {this.handleClickUserInfo(); this.handleClickPetInfo()}}>User page</button></Link>
                {/* link to users page which shows all their pets, link button will need to trigger action that gets all users info
                 */}
            </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        username: state.login.username,
        loggedIn: state.login.loggedin
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home))


import React from 'react'
import {Redirect, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
 
      }

      render() {

        if (this.props.loggedIn) {
            return <Redirect to ='/home'/>
          } else {
            <Redirect to = '/login'/>
          }    
  
        return (
        
            <div>
                <div>
                <h3 className='landing-text'>Welcome {this.props.registeredName}</h3>
                </div>

                <div>
                    <Link style={{textDecoration: 'none'}} to='/createpet'><button>Create a pet</button></Link>
                </div>
                {/* create a pet option that takes you to new page where you can give your pet a name,
                type, habitat, favourtie activity  */}
            </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        registeredName: state.registerUser.firstname,
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home))


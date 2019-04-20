import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
      }

      componentDidMount () {
        if (this.props.loggedIn  === true) {
          this.props.history.push('/home')
      } else {
          this.props.history.push('/')
      } 
    }

      render() {
   
        return (
        
        <div>
          <div>
  
          <h3 className='landing-text'>Don't have an account? Please visit the registration page</h3>
          <br/>
            <Link style={{textDecoration: 'none'}} to='/register'><button>Register</button></Link>
            </div>
            <br/>
            <div>
                <h3 className='landing-text'>Already have an account?</h3>
                <br/>
            <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
            </div>
        </div>
        )

      } 
     
}
  
  export default withRouter(LandingPage)



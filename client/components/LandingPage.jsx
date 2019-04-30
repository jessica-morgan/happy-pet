import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Button from '@react95/core/Button'

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
          <div className="landing-container">
  
            <Link style={{textDecoration: 'none'}} className='landing-row-col1' to='/register'><Button>Register</Button>
             <br/>
              <h3 className='landing-text'>Don't have an account?</h3>
              </Link>
            
             <br/>
            
             <Link style={{textDecoration: 'none'}} className='landing-row-col2' to='/login'><Button>Login</Button>
             <br/>
             <h3 className='landing-text'>Already have an account?</h3>
             </Link>
            </div>
        </div>
        )

      } 
     
}
  
  export default withRouter(LandingPage)



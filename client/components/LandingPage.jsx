import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const LandingPage = () => (

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

  
  export default withRouter(LandingPage)


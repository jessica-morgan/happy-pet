import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const LandingPage = () => (

  <div>
      <div>
          <h3>Don't have an account? Please visit the registration page</h3>
          <br/>
      <Link to='/register'><button>Register</button></Link>
      </div>
      <div>
          <h3>Already have an account?</h3>
          <br/>
      <Link to='/login'><button>Login</button></Link>
      </div>
      
  </div>   
)

  
  export default withRouter(LandingPage)


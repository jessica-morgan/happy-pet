import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { getUserLogIn } from '../actions/login'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.checkLogInDetails = this.checkLogInDetails.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  //checks username and password is in database- changes logged in to true if matched
  checkLogInDetails(username, password) {
   this.props.dispatch(getUserLogIn(username, password))
  }

  //get account create and pet created here

  render() {
    //if user is already logged in redirect to home page
    if (this.props.loggedIn  === true) {
      this.props.history.push('/home')
    } 

    return (
    
        <div>
           <input className='input-fields' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
           <br/>
            <input className='input-fields' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
            <br/>
            <div>
              <button className='button' onClick = {() => {this.checkLogInDetails(this.state.username, this.state.password)}}>
              Login</button>
            </div>
            
        </div>
    )

  } 
 
}

function mapStateToProps (state) {
return {
    //getting username and password from register reducer state (reducer is called registerUser)
    loggedIn: state.login.loggedin
 }
}

export default withRouter(connect(mapStateToProps)(Login))


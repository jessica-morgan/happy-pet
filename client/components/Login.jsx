import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { getUserLogIn } from '../actions/login'
import Button from '@react95/core/Button'
import Input from '@react95/core/Input'

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
          <br/><br/><br/>
          <h3 style={{fontSize: '40px',textDecoration: 'bold', textAlign: 'center', fontFamily: 'Coda, cursive', textShadow: '4px 4px grey', color: 'rgb(63, 69, 74)'}}>Login</h3>
          <br/>
        <div className='register-container'>
           <Input className='input-fields-row-col1' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>

            <Input className='input-fields-row-col2' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
            
              <Button className='input-fields-row-col3' onClick = {() => {this.checkLogInDetails(this.state.username, this.state.password)}}>
              Login</Button>
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


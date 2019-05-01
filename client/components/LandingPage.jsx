import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Button from '@react95/core/Button'
import { Tabs, Tab } from '@react95/core/Tabs'
import Fieldset from '@react95/core/Fieldset'
import Input from '@react95/core/Input'
import {makeNewUserApi} from '../api/users'
import { getUserLogIn } from '../actions/login'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          firstname: '',
          email: '',
          password: '',
          loginUsername: '',
          password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.checkLogInDetails = this.checkLogInDetails.bind(this)
        this.handleChange = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedIn  === true) {
          this.props.history.push('/home')
      } else {
          this.props.history.push('/')
      } 
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    
    //checks username and password is in database- changes logged in to true if matched
    checkLogInDetails(username, password) {
     this.props.dispatch(getUserLogIn(username, password))
    }
  
    //get account create and pet created here

    handleInput(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    //dispatch this info to redux register 
    handleSubmit(){
      //destructring- takes this.state and gets the properties username, password and email, making
      //them available as variables so we can use them as parameters
      const {username, firstname, email, password} = this.state
      //this posts new user to database from registration form
      makeNewUserApi(username, firstname, email, password)
    }

      render() {
   
    //if user is already logged in redirect to home page
    if (this.props.loggedIn  === true) {
      this.props.history.push('/home')
    } 

        return (
      <div>
    
        <div style={{marginLeft: '25vw'}}>
          <Tabs
          style={{ width: '50vw', fontSize: '13px'}}
          defaultActiveTab="Login">

          <Tab title="Login">
          <Fieldset legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>
            <br/><br/>
             <Input className='landing-text' type='text' id='loginUsername' name='loginUsername' placeholder='username' value={this.state.loginUsername} onChange={this.handleChange}/>
              <br/>
               <br/>
                <Input className='landing-text' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
               <br/><br/>
           <Link className='landing-text' style={{textDecoration: 'none'}}> <Button onClick = {() => {this.checkLogInDetails(this.state.loginUsername, this.state.password)}}>
            Login
          </Button></Link>
         <br/><br/><br/>
        </Fieldset>
       </Tab>

      <Tab title="Register" >
      <Fieldset legend='Happy Pet' className='happy-pet-title' style={{ marginBottom: '1em', height: '80vh' }}>
       <br/>
       <Input className='input-fields-row-col1 landing-text' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput}/>
         <br/><br/>
          <Input className='landing-text' type='text' id='firstname' name='firstname' placeholder='name' value={this.state.name} onChange={this.handleInput}/>
           <br/><br/>
            <Input className='landing-text' type='text' id='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleInput}/>
             <br/><br/>
            <Input className='landing-text' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInput}/>
          <br/><br/>       
        <Link className='landing-text' style={{textDecoration: 'none'}} to='/login'><Button style={{fontSize: '14px'}} onClick={() => this.handleSubmit()}>Submit</Button></Link>
       <br/><br/>
      </Fieldset>
     </Tab>

   </Tabs>
  </div>
 </div>
        )

      } 
     
}


function mapStateToProps (state) {
  return {
     //getting username and password from register reducer state (reducer is called registerUser)
      loggedIn: state.login.loggedin,
      username: state.username,
      name: state.name,
      email: state.email,
      password: state.password
  }
}
  
  export default withRouter(connect(mapStateToProps)(LandingPage))



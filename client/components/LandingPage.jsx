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
        {/* <h3 className='header'>Happy Pet</h3> */}
        <br/>
        <h3 style={{fontSize: '40px',textDecoration: 'bold', textAlign: 'center', fontFamily: 'Coda, cursive', textShadow: '4px 4px grey', color: 'rgb(63, 69, 74)'}}>Happy Pet</h3>
        <br/>
        <div style={{marginLeft: 360, marginTop: 20}}>
          <Tabs
          style={{ width: 550, }}
          defaultActiveTab="Login">

          <Tab title="Login">
           <Fieldset legend="Login to Happy Pet" style={{ marginBottom: '1em' }}>
            <br/><br/>
             <Input type='text' id='loginUsername' name='loginUsername' placeholder='username' value={this.state.loginUsername} onChange={this.handleChange}/>
              <br/>
               <br/>
                <Input type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
               <br/><br/><br/>
            <Button onClick = {() => {this.checkLogInDetails(this.state.loginUsername, this.state.password)}}>
           Login
          </Button>
         <br/><br/><br/>
        </Fieldset>
       </Tab>

      <Tab title="Register" >
       <Fieldset legend="Create A New Account" style={{ marginBottom: '1em' }}>
       <Input className='input-fields-row-col1' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput}/>
         <br/><br/>
          <Input type='text' id='firstname' name='firstname' placeholder='name' value={this.state.name} onChange={this.handleInput}/>
           <br/><br/>
            <Input type='text' id='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleInput}/>
             <br/><br/>
            <Input type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInput}/>
          <br/><br/>       
        <Link style={{textDecoration: 'none'}} to='/login'><Button style={{fontSize: '14px'}} onClick={() => this.handleSubmit()}>Submit</Button></Link>
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



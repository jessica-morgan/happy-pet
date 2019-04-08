import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

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
  
  checkLogInDetails() {
    if (this.props.registeredUsername === this.state.username && 
      this.props.registeredPassword === this.state.password) {
        //this.props.history.push allows us to change/update the url path when the funtion returns true- can be used
        //instead of invoking/rendering another component
        this.props.history.push('/home')
      } else {
        this.props.history.push('/incorrectLogin')
      }
  }

  render() {

    return (
    
        <div>
           {/* dispatch info of each input element to redux */}
           <input className='input-fields' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
           <br/>
            <input className='input-fields' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
            <br/>
            <div>
              <button onClick = {() => this.checkLogInDetails()}>Login</button>
                {/* ternary that checks for correct login details- if they match render login button which directs to /home
                else return 'invalid login' */}
                {/* {this.props.registeredUsername === this.state.username && 
                this.props.registeredPassword === this.state.password ? 
                <div><Link to='/home'><button >Submit</button></Link></div> 
                //atm this renders as default
                : <div><h3>Incorrect login details</h3></div>} */}
            </div>
            
        </div>
    )

  } 
 
}

function mapStateToProps (state) {
return {
    //getting username and password from register reducer state (reducer is called registerUser)
    registeredUsername: state.registerUser.username,
    registeredPassword: state.registerUser.password
 }
}

export default withRouter(connect(mapStateToProps)(Login))


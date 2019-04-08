import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class IncorrectLogin extends React.Component {
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
        this.props.history.push('/home')
      } else {
        this.props.histroy.push('/incorrectLogin')
      }
  }

  render() {

    return (
    
        <div>
            <h3 className='landing-text'>Your login details were incorrect, please try logging in again</h3>
            <br/>
           <input className='input-fields' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
           <br/>
            <input className='input-fields' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
            <br/>
            <div>
              <button onClick = {() => this.checkLogInDetails()}>Login</button>
            </div>
            
        </div>
    )

  } 
 
}

function mapStateToProps (state) {
return {
    registeredUsername: state.registerUser.username,
    registeredPassword: state.registerUser.password
 }
}

export default withRouter(connect(mapStateToProps)(IncorrectLogin))

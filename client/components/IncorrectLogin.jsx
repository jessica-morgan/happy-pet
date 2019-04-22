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

  componentDidMount () {
    if (this.props.loggedIn  === true) {
      this.props.history.push('/home')
  } else {
      this.props.history.push('/login')
  } 
}

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  checkLogInDetails(username, password) {
     this.props.dispatch(getUserLogIn(username, password))
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
              <button className='button' onClick = {() => this.checkLogInDetails(this.state.username, this.state.password)}>Login</button>
            </div>
            
        </div>
    )

  } 
 
}

function mapStateToProps (state) {
return {
  loggedIn: state.login.loggedin
 }
}

export default withRouter(connect(mapStateToProps)(IncorrectLogin))


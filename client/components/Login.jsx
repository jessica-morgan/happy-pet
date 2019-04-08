import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  //dispatch this info to redux register state
  handleSubmit() {
    console.log('hello')
    //destructring- takes this.state and gets the properties username and password making
    //them available as variables so we can use them as parameters
    const {username, password} = this.state
    this.props.dispatch(login(username, password))
  }

  
  render() {

    return (
    
        <div>
           {/* dispatch info of each input element to redux */}
           <input type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
           <br/>
            <input type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
            <br/>
           <button onClick={() => this.handleSubmit()} >Submit</button>
        </div>
    )

  } 
 
}

function mapStateToProps (state) {
return {
    username: state.username,
    password: state.password
}
}

export default withRouter(connect(mapStateToProps)(Login))


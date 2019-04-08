import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../actions/register'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          email: '',
          password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
      //dispatch this info to redux register state
      handleSubmit(){
        //destructring- takes this.state and gets the properties username, password and email, making
        //them available as variables so we can use them as parameters
        const {username, password, email} = this.state
        this.props.dispatch(register(username, email, password))
      }

      render() {

        return (
        
            <div>
               {/* dispatch info of each input element to redux */}
               <input className='input-fields' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
               <br/>
                <input className='input-fields' type='text' id='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
                <br/>
                <input className='input-fields' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
                <br/>
               <Link style={{textDecoration: 'none'}} to='/login'><button onClick={() => this.handleSubmit()}>Submit</button></Link>
            </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        username: state.username,
        email: state.email,
        password: state.password
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Register))


import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {makeNewUserApi} from '../api/users'
import Button from '@react95/core/Button'
import Input from '@react95/core/Input'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          firstname: '',
          email: '',
          password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedIn  === true) {
          this.props.history.push('/home')
      } else {
          this.props.history.push('/register')
      } 
    }

      handleChange(event) {
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

        return (
          <div>
          <br/><br/><br/>
          <h3 style={{fontSize: '40px',textDecoration: 'bold', textAlign: 'center', fontFamily: 'Coda, cursive', textShadow: '4px 4px grey', color: 'rgb(63, 69, 74)'}}>Register</h3>
          <br/>
            <div className='register-container'>
               <Input className='input-fields-row-col1' type='text' id='username' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
               <br/>
               <Input className='input-fields-row-col2' type='text' id='firstname' name='firstname' placeholder='name' value={this.state.name} onChange={this.handleChange}/>
                <br/>
                <Input className='input-fields-row-col3' type='text' id='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
                <br/>
                <Input className='input-fields-row-col4' type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
                <br/>
               <Link className='input-fields-row-col5' style={{textDecoration: 'none'}} to='/login'><Button style={{fontSize: '14px'}} onClick={() => this.handleSubmit()}>Submit</Button></Link>
            </div>
           </div>
        )

      }     
}

function mapStateToProps (state) {
    return {
        loggedIn: state.login.loggedin,
        username: state.username,
        name: state.name,
        email: state.email,
        password: state.password
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Register))


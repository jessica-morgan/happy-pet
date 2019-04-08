import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
 
      }


      render() {

        return (
        
            <div>
                <h3>'Welcome' + {this.props.loginUsername}</h3>
            </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        loginUsername: state.login.username,
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home))


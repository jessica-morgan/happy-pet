import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
 
      }


      render() {

        return (
        
            <div>
                <h3>Welcome {this.props.registeredUsername}</h3>
            </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        registeredUsername: state.registerUser.username,
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home))


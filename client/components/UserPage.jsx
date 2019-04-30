import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { petAge } from '../actions/petInfo'
import {format, differenceInDays} from 'date-fns'

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
      
      }   

      componentDidMount () {
        if (this.props.loggedin  === true) {
          this.props.history.push('/userpage')
      } else {
          this.props.history.push('/')
      } 
    }

    //when click on pet page link calculate pets age using this.props.petCreated state.getPetInfo.petCreated
    getPetAge() {
      let created = format(this.props.petCreated)
      let currentDate = format(new Date())
      let age = differenceInDays(currentDate, created)
      this.props.dispatch(petAge(age))
    }

      render() {
 
        return (
        
            <div>
                <h1 className='title'>Welcome to {this.props.username}'s page!</h1>
                <br/>
                <div className='user-info-container1'>
                 {/* shows user info */}
                 <h3 className='userPage-row-col1 landing-text'>Username:</h3>
                 <h3 className='userPage-row-col4 userPage-text'>{this.props.username}</h3>
                 <h3 className='userPage-row-col2 landing-text'>Name:</h3>
                 <h3 className='userPage-row-col5 userPage-text'>{this.props.firstname}</h3>
                 <h3 className='userPage-row-col9 landing-text'>Status:</h3>
                 {this.props.loggedin === true ? <h3 className='userPage-row-col10 userPage-text'>Online</h3> 
                 : <h3 className='userPage-row-col10 userPage-text'>Offline</h3>}
                </div>

                 <div className='user-info-container2'>
                 {/* shows pet image and link to page */}
                 {this.props.pettype ? <Link to='/petpage' className='userPage-row-col7' onClick = {() => this.getPetAge()}><img src={this.props.petimage} className='userPage-petimg'></img></Link> : <div></div>}
                 <h3 className='userPage-row-col8 landing-text'>Visit {this.props.petname}'s page</h3>
                 </div>
           </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        username: state.login.username,
        firstname: state.user.firstname,
        acctCreated: state.user.createdAt,
        acctAge: state.user.accountAge,
        loggedin: state.login.loggedin,
        pettype: state.getPetInfo.petType,
        petname: state.getPetInfo.petName,
        petimage: state.getPetInfo.petImage,
        petCreated: state.getPetInfo.petCreated
    }
  }
  
  export default withRouter(connect(mapStateToProps)(UserPage))



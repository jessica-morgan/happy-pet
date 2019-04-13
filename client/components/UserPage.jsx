import React from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
      }   

      render() {

        if (this.props.loggedin === 1) {
          return this.props.history.push('/home')
        } else {
            this.props.history.push('/login')
        }    

        return (
        
            <div>
                <h1 className='title'>Welcome to {this.props.username}'s page!</h1>
                <br/>
                <div className='user-info-container1'>
                 {/* show user info */}
                 <h3 className='userPage-row-col1 landing-text'>Username:</h3>
                 <h3 className='userPage-row-col4 userPage-text'>{this.props.username}</h3>
                 <h3 className='userPage-row-col2 landing-text'>Name:</h3>
                 <h3 className='userPage-row-col5 userPage-text'>{this.props.firstname}</h3>
                 <h3 className='userPage-row-col3 landing-text'>Status:</h3>
                 {this.props.loggedin === 1 ? <h3 className='userPage-row-col6 userPage-text'>Online</h3> 
                 : <h3 className='userPage-row-col6 userPage-text'>Offline</h3>}
                </div>

                 <div className='user-info-container2'>
                 {this.props.pettype === 'dog' ? <Link to='/petpage'><img src='/images/dogpet.png' className='userPage-petimg'></img></Link>
                 : <div></div>}
                 {this.props.pettype === 'cat' ? <Link to='/petpage'><img src='/images/catpet.png' className='userPage-petimg'></img></Link> 
                 : <div></div>}
                 {this.props.pettype === 'tiger' ? <Link to='/petpage'><img src='/images/tigerpet.png' className='userPage-petimg'></img></Link> 
                 : <div></div>}
                 {this.props.pettype === 'giraffe' ? <Link to='/petpage'><img src='/images/giraffepet.png' className='userPage-petimg'></img></Link> 
                 : <div></div>}
                 <h3 className='userPage-row-col8 landing-text'>Visit {this.props.petname}'s page</h3>
                 </div>
                {/* link to pet page, button will need to trigger getuserspetinfo action so it can display pet stats */}
           </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        username: state.login.username,
        firstname: state.user.firstname,
        loggedin: state.user.loggedin,
        pettype: state.getPetInfo.petType,
        petname: state.getPetInfo.petName
    }
  }
  
  export default withRouter(connect(mapStateToProps)(UserPage))



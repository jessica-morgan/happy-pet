import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { petHunger } from '../actions/petInfo'
import { feedPetApi } from '../api/pets'
import {format, differenceInHours} from 'date-fns'
import ProgressBar from 'react-bootstrap/ProgressBar'

class HungerProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.feedPet = this.feedPet.bind(this)
      }

    petFull() {
      //get js date object
     let currentDate = format(new Date())
     let username = this.props.username
     //sends new last fed date to and changes fed to true in db, changes fed to true redux state
     feedPetApi(username, currentDate) && this.props.dispatch(petHunger(false))
     this.props.history.push('/feedpet')
    }

    feedPet() {
     let currentTime = format(new Date())
     let user = this.props.username
     feedPetApi(user, currentTime)
     this.props.history.push('/feedpet')
    }

      render() {

 const timeNow = format(new Date)
 const timeLastFed = format(this.props.lastFed)
 const difference = differenceInHours(timeNow, timeLastFed)

        return (
        
           <div>
               {difference >= 12 ? 
                <h3 className='feed-pet-row-col3 petPage-stats-title'>
                 <ProgressBar className='progress-container feed-pet-row-col2' now={50} label="I'm good!" variant="warning"/></h3>
                :
                <h3 className='feed-pet-row-col3 petPage-stats-title'>
                <ProgressBar className='progress-container feed-pet-row-col2' now={100} label="I'm full!" variant="danger"/>
                </h3>
               }
              
                
        
            </div>
        )

      } 
}

function mapStateToProps (state) {
    return {
        loggedin: state.login.loggedin,
        username: state.user.username,
        petImage: state.getPetInfo.petImage,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        fed: state.getPetInfo.fed,
        lastFed: state.getPetInfo.lastFed,
        hunger: state.getPetInfo.hunger
    }
  }
  
  export default withRouter(connect(mapStateToProps)(HungerProgressBar))
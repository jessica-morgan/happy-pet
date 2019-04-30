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
      }



      render() {

 const timeNow = format(new Date)
 const timeLastFed = format(this.props.lastFed)
 const difference = differenceInHours(timeNow, timeLastFed)

        return (
        
           <div>
              {/* if difference in hours since now and last fed is >= 12 show hunger at 50% */}
               {difference >= 12 ? 
                <h3 className='feed-pet-row-col3 petPage-stats-title'>
                 <ProgressBar className='progress-container feed-pet-row-col2' now={50} label="I'm good!" variant="warning"/></h3>
                :
                // else show it at 100%
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
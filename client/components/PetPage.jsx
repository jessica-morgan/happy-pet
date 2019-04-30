import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { petHunger } from '../actions/petInfo'
import {format, differenceInHours} from 'date-fns'
import ProgressBar from 'react-bootstrap/ProgressBar'
import HungerProgressBar from './HungerProgressBar'

class PetPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.checkLastFed = this.checkLastFed.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedin  === true) {
          this.props.history.push('/petpage')
      } else {
          this.props.history.push('/login')
      } 
    }

    checkLastFed() {
      let currentDate = format(new Date)
      console.log(currentDate)
      let lastfed = format(this.props.lastFed)
      console.log(lastfed)
      let diff = differenceInHours(currentDate, lastfed)
      console.log(diff)
      if (diff > 24)
      {
      //if time diff is more than 24 hours dispatch pethunger to true
      this.props.dispatch(petHunger(true))
      } else {
      //else dispatch false
        this.props.dispatch(petHunger(false))
      }
      this.props.history.push('/feedpet')
    }
    

      render() {
 
    const timeNow = format(new Date)
    const timeLastFed = format(this.props.lastFed)
    const difference = differenceInHours(timeNow, timeLastFed)

        return (
          
            <div>
                <h1 className='title'>{this.props.petName}</h1>
             <br/><br/><br/>

             
            <div className='petPage-container'>

                 {this.props.petType ? <img className='petPage-row-col1 petPage-grid-images' src={this.props.petImage}/> 
                : <div className='petPage-row-col1 petPage-grid-images'></div>}

                <h3 className='petPage-row-col10 petPage-stats-title'>
             
                <button className='button' onClick={() => {this.checkLastFed()}}>Feed {this.props.petName}</button>
                </h3>

                <h3 className='petPage-row-col2 petPage-stats-title'>
                Owner:
                </h3>
                <h3 className='petPage-row-col3 landing-text'>{this.props.username}</h3>
                <h3 className='petPage-row-col4 petPage-stats-title '>
                Habitat:
                </h3>
                <h3 className='petPage-row-col5 landing-text'>{this.props.habitat}</h3>
                <h3 className='petPage-row-col6 petPage-stats-title '>
                Activity:
                </h3>
                <h3 className='petPage-row-col7 landing-text'>{this.props.activity}</h3>
                <h3 className='petPage-row-col8 petPage-stats-title '>
                Age:
                </h3>
                <h3 className='petPage-row-col9 landing-text'>{this.props.petAge} days old</h3>
                <h3 className='petPage-row-col11 petPage-stats-title '>
                Hunger:
                </h3>
                {/* if difference in hours since now and last fed is greater than 24 show empty hunger bar else show progress bar component */}
                {difference > 24 ? 
                <h3 className='petPage-row-col12 landing-text'> 
                <ProgressBar now={0} label="I'm hungry!" variant="warning"/>
                </h3> 
                :  <h3 className='petPage-row-col12 landing-text'> 
                <HungerProgressBar/>
                </h3>
                }
            </div>
           </div>
        )

      } 
}

function mapStateToProps (state) {
    return {
        loggedin: state.login.loggedin,
        username: state.login.username,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        habitat: state.getPetInfo.habitat,
        activity: state.getPetInfo.activity,
        petImage: state.getPetInfo.petImage,
        fed: state.getPetInfo.fed,
        lastFed: state.getPetInfo.lastFed,
        petCreated: state.getPetInfo.petCreated,
        petAge: state.getPetInfo.petAge
    }
  }
  
  export default withRouter(connect(mapStateToProps)(PetPage))


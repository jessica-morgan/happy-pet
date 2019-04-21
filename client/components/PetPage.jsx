import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { petHunger, petAge } from '../actions/petInfo'

import {format, differenceInHours} from 'date-fns'

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

        return (
        
            <div>
                <h1 className='title'>{this.props.petName}</h1>
             <br/><br/><br/>
            <div className='petPage-container'>

                 {this.props.petType ? <img className='petPage-row-col1 petPage-grid-images' src={this.props.petImage}/> 
                : <div className='petPage-row-col1 petPage-grid-images'></div>}

                <h3 className='petPage-row-col10 petPage-stats-title'>
                {/* Feed button will check for time elapsed */}
                {/* this button will also redirect a feeding page which will have a button that posts new timestamp to db */}
                <button onClick={() => {this.checkLastFed()}}>Feed {this.props.petName}</button>
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


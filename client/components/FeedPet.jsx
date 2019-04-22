import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { petHunger } from '../actions/petInfo'
import { feedPetApi } from '../api/pets'
import {format} from 'date-fns'

class FeedPet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.feedPet = this.feedPet.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedin  === true) {
          this.props.history.push('/feedpet')
      } else {
          this.props.history.push('/login')
      } 
      }

    feedPet() {
      //get js date object
     let currentDate = format(new Date())
     let username = this.props.username
     //sends new last fed date to and changes fed to true in db, changes fed to true redux state
     feedPetApi(username, currentDate) && this.props.dispatch(petHunger(false))
    }

      render() {

        return (
        
           <div>
            <h1 className={styles.title}>Feed {this.props.petName}</h1>
             <br/><br/><br/>
              <div className={styles.feed-pet-container}>    
                 {this.props.petType ? <img className={styles.feed-pet-row-col1 && styles.petPage-grid-images} src={this.props.petImage}/> 
                : <div className={styles.feed-pet-row-col1 && styles.petPage-grid-images}></div>}

                {/* checks pet hunger status- if hungry show button if flase show 'i'm full' */}
                {this.props.hunger === true ? 
                <h3 className={styles.feed-pet-row-col2 && styles.petPage-stats-title}>
                <button className='button' onClick={() => {this.feedPet(this.props.username)}}>Feed {this.props.petName}</button></h3> 
                : <h3 className={styles.feed-pet-row-col2 && styles.petPage-stats-title}>I'm full!</h3>
              }
            </div>
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
  
  export default withRouter(connect(mapStateToProps)(FeedPet))
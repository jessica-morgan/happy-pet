import React from 'react'
import {withRouter, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import { feedPetApi } from '../api/pets'
import {format} from 'date-fns'

class FeedPet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          hunger: false,
          username: ''
        }
        this.feedPet = this.feedPet.bind(this) 
        this.refresh = this.refresh.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedin  === true) {
          console.log('hello')
          this.props.history.push('/feedpet')
      } else {
          this.props.history.push('/')
    } 
   }

    feedPet() {
     let currentTime = format(new Date())
     let user = this.props.username
     feedPetApi(user, currentTime)
    }

    refresh() {
      this.setState({ state: this.state });
    }

      render() {
       
 
        return (
        
           <div>
            <h1 className='title'>Feed {this.props.petName}</h1>
             <br/><br/><br/>
              <div className='feed-pet-container'>    
                 {this.props.petType ? <img className='feed-pet-row-col1 petPage-grid-images' src={this.props.petImage}/> 
                : <div className='feed-pet-row-col1 styles.petPage-grid-images'></div>}
                  <br/>
                  
                  <br/>

                  {this.props.hunger ? <h3 className='feed-pet-row-col2 petPage-stats-title'>
                   <button className='button' onClick={() => {this.feedPet(this.props.username); this.refresh()}}>Feed {this.props.petName}</button></h3> 
                   : <h3 className='feed-pet-row-col2 petPage-stats-title'>I'm full!</h3>}

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
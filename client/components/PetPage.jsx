import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUsersPetInfo} from '../actions/petInfo'

class PetPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
      }

      componentDidMount () {
        if (this.props.loggedin  === true) {
          this.props.history.push('/petpage')
      } else {
          this.props.history.push('/login')
      } 
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
                <button>Feed {this.props.petName}</button>
                </h3>
                {/* feed option here */}

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
                Status:
                </h3>
                {this.props.fed === true ? <h3 className='petPage-row-col9 landing-text'>Full!</h3> :
                <h3 className='petPage-row-col9 landing-text'>Hungry!</h3>}
                
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
        fed: state.getPetInfo.fed
    }
  }
  
  export default withRouter(connect(mapStateToProps)(PetPage))


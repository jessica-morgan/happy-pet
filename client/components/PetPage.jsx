import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class PetPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
      }

      render() {

        return (
        
            <div>
                <h1 className='title'>{this.props.petName}</h1>
             <br/><br/><br/>
            <div className='petPage-container'>
                 {this.props.petType === 'dog' ? <img className='petPage-row-col1 petPage-grid-images' src="/images/dogpet.png"/> 
                : <div className='petPage-row-col1 petPage-grid-images'></div>}
                {this.props.petType === 'giraffe' ? <img className='petPage-row-col1 petPage-grid-images' src="/images/giraffepet.png"/> 
                : <div className='petPage-row-col1 petPage-grid-images'></div>}
                 {this.props.petType === 'cat' ? <img className='petPage-row-col1 petPage-grid-images' src="/images/catpet.png"/> 
                : <div className='petPage-row-col1 petPage-grid-images'></div>}
                 {this.props.petType === 'tiger' ? <img className='petPage-row-col1 petPage-grid-images' src="/images/tigerpet.png"/> 
                : <div className='petPage-row-col1 petPage-grid-images'></div>}

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
            </div>

           </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        username: state.registerUser.username,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        habitat: state.getPetInfo.habitat,
        activity: state.getPetInfo.activity
    }
  }
  
  export default withRouter(connect(mapStateToProps)(PetPage))


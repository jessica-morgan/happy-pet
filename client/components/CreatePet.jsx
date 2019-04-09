import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {petInfo} from '../actions/petInfo'

class CreatePet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            petType: '',
            petName: '',
            habitat: '',
            activity: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }

      handleClick(id) {
          //sets state with pet type chosen
        this.setState({petType: id})
      }

      handleChange(event) {
          //sets state with pet info input
        this.setState({ [event.target.name]: event.target.value });
      }

      handleSubmit() {
          //dispatch component state to redux petinfo
          const {petType, petName, habitat, activity} = this.state
        this.props.dispatch(petInfo(petType, petName, habitat, activity))
      }

      render() {

        return (
        
            <div>
                <h1 className='title'>Create a pet!</h1>
               
                <br/>
                <div className='image-container'>
                <h3 className='row-col1 landing-text'>Choose your pet</h3>
                <img id='dog' className='row-col2 grid-images' src='/images/dogpet.png' onClick={() => {this.handleClick('dog')}}/>
                <img id='giraffe' className='row-col3 grid-images' src='/images/giraffepet.png' onClick={() => {this.handleClick('giraffe')}}/>
                <img id='cat' className='row-col4 grid-images' src='images/catpet.png' onClick={() => {this.handleClick('cat')}}/>
                <img id='tiger' className='row-col5 grid-images' src='/images/tigerpet.png' onClick={() => {this.handleClick('tiger')}}/>
                </div>

                <div>
                 {/* create a pet option that takes you to new page where you can give your pet a name,
                type, habitat, favourtie activity  */}
                <br/><br/><br/><br/><br/><br/><br/><br/>
                    <h3 className='createpet-text'>Give your pet a name:</h3>
                    <input className='input-fields' type='text' name='petName' id='petName' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='createpet-text'>Where does your pet live?</h3>
                    <input className='input-fields' type='text' name='habitat' id='habitat' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='createpet-text'>What does your pet like to do?</h3>
                    <input className='input-fields' type='text' name='activity' id='activity'onChange={this.handleChange}/>
                    <br/>
                    <Link style={{textDecoration: 'none'}} to='/petpage'><button>Enter</button></Link>
                </div>

                <div>
                {/* show chosen pet, its name, habitat and activity */}

                </div>
               
            </div>
        )

      } 
     
}

function mapStateToProps (state) {
    return {
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        habitat: state.getPetInfo.habitat,
        activity: state.getPetInfo.activity
    }
  }
  
  export default withRouter(connect(mapStateToProps)(CreatePet))


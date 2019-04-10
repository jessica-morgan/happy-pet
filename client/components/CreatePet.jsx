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
                <div className='createpet-container'>
                <h3 className='row-col1 landing-text'>Choose your pet</h3>
                <img id='dog' className='row-col2 grid-images' src='/images/dogpet.png' onClick={() => {this.handleClick('dog')}}/>
                <img id='giraffe' className='row-col3 grid-images' src='/images/giraffepet.png' onClick={() => {this.handleClick('giraffe')}}/>
                <img id='cat' className='row-col4 grid-images' src='images/catpet.png' onClick={() => {this.handleClick('cat')}}/>
                <img id='tiger' className='row-col5 grid-images' src='/images/tigerpet.png' onClick={() => {this.handleClick('tiger')}}/>
                 {/* show chosen pet, its name, habitat and activity */}
                 {this.state.petType === 'dog' ? <img className='row-col6 chosen-pet' src="/images/dogpet.png"/> 
                : <div className='row-col6 chosen-pet'></div>}
                {this.state.petType === 'giraffe' ? <img className='row-col6 chosen-pet' src="/images/giraffepet.png"/> 
                : <div className='row-col6 chosen-pet'></div>}
                 {this.state.petType === 'cat' ? <img className='row-col6 chosen-pet' src="/images/catpet.png"/> 
                : <div className='row-col6 chosen-pet'></div>}
                 {this.state.petType === 'tiger' ? <img className='row-col6 chosen-pet' src="/images/tigerpet.png"/> 
                : <div className='row-col6 chosen-pet'></div>}
            </div>
                 {/* create a pet option that takes you to new page where you can give your pet a name,
                type, habitat, favourtie activity  */}               
                    
            <div className='input-container'>
                <h3 className='input-rowcol1 landing-text'>
                Name:
                </h3>
                {this.state.petName.length > 0 ? <h3 className='input-rowcol2 petInfo-text-container'> {this.state.petName}</h3>
                : <div className='input-rowcol2 petInfo-text-container'></div>}
            
                <h3 className='input-rowcol3 landing-text'>
                Habitat:
                </h3>
                {this.state.habitat.length > 0 ? <h3 className='input-rowcol4 petInfo-text-container'> {this.state.habitat}</h3>
                : <div className='input-rowcol4 petInfo-text-container'></div>}


                <h3 className='input-rowcol5 landing-text'>
                Activity:
                </h3>
                {this.state.activity.length > 0 ? <h3 className='input-rowcol6 petInfo-text-container'> {this.state.activity}</h3>
                : <div className='input-rowcol6 petInfo-text-container'></div>}
              
                <h3 className='input-rowcol7 createpet-text'>Give your pet a name:</h3>
                    <input style={{marginTop: '15px'}} className='input-rowcol7 input-fields' type='text' name='petName' id='petName' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='input-rowcol8 createpet-text'>Where does your pet live?</h3>
                    <input style={{marginTop: '15px'}} className='input-rowcol8 input-fields' type='text' name='habitat' id='habitat' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='input-rowcol9 createpet-text'>What does your pet like to do?</h3>
                    <input style={{marginTop: '15px'}} className='input-rowcol9 input-fields' type='text' name='activity' id='activity'onChange={this.handleChange}/>
                    <br/>
                    <Link className='input-rowcol10' to='/petpage'>
                    <button onClick={() => {this.handleSubmit(this.state)}}>Enter</button>
                    </Link>
             
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


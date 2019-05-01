import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { newpetApi} from '../api/pets'
import Input from '@react95/core/Input'
import Button from '@react95/core/Button'

class CreatePet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            petType: '',
            petName: '',
            habitat: '',
            activity: '',
            petImageUrl: ''
        }
        this.setPetImage = this.setPetImage.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      componentDidMount () {
        if (this.props.loggedIn  === true) {
          this.props.history.push('/createpet')
      } else {
          this.props.history.push('/')
      } 
    }

      setPetImage (imgurl) {
        this.setState({petImageUrl: imgurl})
    }

      handleChange(event) {
          //sets state with pet info input
        this.setState({ [event.target.name]: event.target.value });
      }

      handleSubmit() {
        //dispatch component state to redux petinfo
        const owner = this.props.ownerName
        const {petType, petName, habitat, activity} = this.state
        newpetApi(owner, petType, petName, habitat, activity)
      }

      render() {
   

        return (
        
            <div>
                <h1 className='happy-pet-title'>Create a pet!</h1>
                <br/>
                {/* pets to choose from */}
                <div className='createpet-container'>
                <h3 className='row-col1 createpet-text'>Choose your pet</h3>
                <img id='monkey' className='row-col2 grid-images' src='/images/monkeyPetIcon.png' onClick={() => {this.setPetImage('/images/monkeyPetIcon.png')}}/>
                <img id='mouse' className='row-col3 grid-images' src='/images/mousePetIcon.png' onClick={() => {this.setPetImage('/images/mousePetIcon.png')}}/>
                <img id='cat' className='row-col4 grid-images' src='images/catPetIcon.png' onClick={() => {this.setPetImage('images/catPetIcon.png')}}/>
                <img id='bunny' className='row-col5 grid-images' src='/images/bunnyPetIcon.png' onClick={() => {this.setPetImage('images/bunnyPetIcon.png')}}/>
                  {/* shows chosen pet */}
                 <img className='row-col6 chosen-pet' src={this.state.petImageUrl}/> 
            </div>             

            {/* where inputted name, habitat and activity are shown */}
             <div className='input-container'>
              
                {/* inputs for name, habitat and activity */}
                <h3 className='input-rowcol7 createpet-text'>Give your pet a name:</h3>
                    <Input style={{marginTop: '3vh'}} className='input-rowcol7' type='text' name='petName' id='petName' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='input-rowcol8 createpet-text'>Where does your pet live?</h3>
                    <Input style={{marginTop: '3vh'}} className='input-rowcol8' type='text' name='habitat' id='habitat' onChange={this.handleChange}/>
                    <br/>
                    <h3 className='input-rowcol9 createpet-text'>What does your pet like to do?</h3>
                    <Input style={{marginTop: '3vh'}} className='input-rowcol9' type='text' name='activity' id='activity'onChange={this.handleChange}/>
                  
                    <Link className='input-rowcol10' to='/home'>
                    <Button onClick={() => {this.handleSubmit(this.state)}}>Enter</Button>
                    </Link>       
                </div>
              
               </div>
        )
      } 
}

function mapStateToProps (state) {
    return {
        loggedIn: state.login.loggedin,
        ownerName: state.login.username,
        petType: state.getPetInfo.petType,
        petName: state.getPetInfo.petName,
        habitat: state.getPetInfo.habitat,
        activity: state.getPetInfo.activity,
        petImage: state.getPetInfo.petImgUrl
    }
  }
  
  export default withRouter(connect(mapStateToProps)(CreatePet))


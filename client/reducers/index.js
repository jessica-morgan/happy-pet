
import {combineReducers} from 'redux'
import registerUser from './register'
import login from './login'
import getPetInfo from './petInfo'

export default combineReducers({
  registerUser,
  login,
  getPetInfo
})
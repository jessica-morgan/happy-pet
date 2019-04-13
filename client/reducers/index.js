
import {combineReducers} from 'redux'
import registerUser from './register'
import login from './login'
import getPetInfo from './petInfo'
import user from './users'

export default combineReducers({
  registerUser,
  login,
  getPetInfo,
  user
})
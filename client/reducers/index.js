
import {combineReducers} from 'redux'
import registerUser from './register'
import login from './login'

export default combineReducers({
  registerUser,
  login
})
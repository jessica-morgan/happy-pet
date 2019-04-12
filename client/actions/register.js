import {getNewUserApi} from '../api/users'

export function getNewUser (username) {
  return function (dispatch) {
    //will post user info from registration form
    //need a way to get new users info and dispatch it to redux
    getNewUserApi(username)
      .then(res => {
        dispatch(register(res))
      })
  }
}

export const register = (user) => {
    return {
      //if action register is called
      type: 'REGISTER',
      //return this
      user
    }
  }

  
import {getUserApi} from '../api/users'
import {checkHasPetApi} from '../api/users'

export function getUser (username) {
    return function (dispatch) {
      getUserApi(username)
        .then(res => {
             return dispatch(userData(res[0].username, res[0].firstname, res[0].loggedin, res[0].created_at)) 
            })
    }
  }

export function checkIfUserHasPet (username) {
  return function (dispatch) {
    checkHasPetApi(username)
    .then(res => {
      return dispatch(hasPetLogin(res[0].hasPet))
    })
  }
}

export function getAcctCreated (username) {
  return function(dispatch) {
    getUserApi(username)
    .then(res => {
      console.log(res)
      return dispatch(getAccountCreated(res[0].created_at))
    })
  }
}


export const userData = (username, firstname, loggedin, date) => {
    return {
        type: 'USER_DATA',
        username,
        firstname,
        loggedin,
        date
    }
}

export const hasPet = () => {
  return {
    type: 'HAS_PET'
  }
}

export const hasPetLogin = (hasPet) => {
  return {
    type: 'HAS_PET_LOGIN',
    hasPet
  }
}

export const initialiseUserData = () => {
  return {
    type: 'INITIALISE_USER_DATA'
  }
}

export const changeHasPet = () => {
  return {
    type: 'PET_DELETED'
  }
}
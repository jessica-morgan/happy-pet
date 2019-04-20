import {getUserApi} from '../api/users'

export function getUser (username) {
    return function (dispatch) {
      getUserApi(username)
        .then(res => {
             return dispatch(userData(res[0].username, res[0].firstname, res[0].loggedin,)) 
            })
    }
  }

export function getAcctCreated (username) {
  return function(dispatch) {
    getUserApi(username)
    .then(res => {
      return dispatch(getAccountCreated(res[0].created_at))
    })
  }
}


export const userData = (username, firstname, loggedin) => {
    return {
        type: 'USER_DATA',
        username,
        firstname,
        loggedin
    }
}

export const getAccountCreated = (createdAt) => {
  return {
    type: 'ACCOUNT_CREATED',
    createdAt
  }
}

export const getAccountAge = (age) => {
  return {
    type: 'ACCOUNT_AGE',
    age
  }
}
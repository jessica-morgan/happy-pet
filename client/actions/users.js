import {getUserApi} from '../api/users'

export function getUser (username) {
    return function (dispatch) {
      getUserApi(username)
        .then(res => {
            console.log(res)
             return dispatch(userData(res[0].username, res[0].firstname, res[0].loggedin)) 
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
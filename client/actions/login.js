import {getUserApi, loggedInApi, logoutUserApi} from '../api/users'

export function getUserLogIn (username, password) {
    return function (dispatch) {
      getUserApi(username)
      //get a user by username- if username === username && password === password
      //then change logged in to true
        .then(res => {
             if (res[0].username === username && res[0].password === password) {
               //changes login state to true and changes loggedin to true in db
              return dispatch(loggedIn(res[0].username, res[0].password)) && loggedInApi(res[0].username) 
            }
        })
    }
  }

  export function logout (username) {
    return function (dispatch) {
      getUserApi(username)
        .then(res => {
             if (res[0].username === username) {
              return dispatch(logOut(res[0].username)) && logoutUserApi(res[0].username)
            }
        })
    }
  } 

export const loggedIn = (username, password) => {
    return {
        type: 'LOGGED_IN',
        username,
        password
    }
}

export const logOut = (username) => {
  return {
    type: 'LOGOUT',
    username
  }
}

export const initialiseLoginData = () => {
  return {
    type: 'INITIALISE_LOGIN_DATA'
  }
}

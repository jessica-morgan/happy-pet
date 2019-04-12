import {loggedInApi} from '../api/users'

export function getUserLoggedIn (username) {
    return function (dispatch) {
      loggedInApi(username)
        .then(res => {
            console.log(res) //test what the response is 
          dispatch(loggedIn(res))
        })
    }
  }
  //decide how i want this^^ to translate to redux- how i wanna use it in components?

export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username,
        password
    }
}

export const loggedIn = (username) => {
    return {
        type: 'LOGGED_IN',
        username
    }
}


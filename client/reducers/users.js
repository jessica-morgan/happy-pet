const initialUserState = [{
  username: '',
  firstname: '',
  loggedin: false
}]

export const user = (state = initialUserState, action) => {
    switch (action.type) {
      case 'USER_DATA':
        return {
           username: action.username,
           firstname: action.firstname,
           loggedin: action.loggedin
        }
        default:
        return state
    }
  }

export default user
  
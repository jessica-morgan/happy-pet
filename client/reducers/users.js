const initialUserState = [{
  username: '',
  firstname: '',
  loggedin: false,
  acctCreated: '',
  hasPet: false
}]

export const user = (state = initialUserState, action) => {
    switch (action.type) {
      case 'USER_DATA':
        return {
           username: action.username,
           firstname: action.firstname,
           loggedin: action.loggedin,
           acctCreated: action.date
        } 
        case 'HAS_PET':
        return {
          hasPet: true
        }
        default:
        return state
    }
  }

export default user
  
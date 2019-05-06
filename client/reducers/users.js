const initialUserState = {
  username: '',
  firstname: '',
  loggedin: false,
  acctCreated: '',
  hasPet: false
}

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
          ...state,
          hasPet: true
        }
        case 'INITIALISE_USER_DATA':
        return {
          initialUserState
        }
        case 'HAS_PET_LOGIN':
        return {
          ...state,
          hasPet: action.hasPet
        }
        case 'PET_DELETED':
        return {
          ...state,
          hasPet: false
        }
        default:
        return state
    }
  }

export default user
  
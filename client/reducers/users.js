const initialUserState = []

export const user = (state = initialUserState, action) => {
    switch (action.type) {
      case 'USER_DATA':
        return {
           username: action.username,
           firstname: action.firstname,
           loggedin: action.loggedin
        }
        case 'ACCOUNT_CREATED':
        return {
          ...state,
          createdAt: action.createdAt
        }
        case 'ACCOUNT_AGE':
        return {
          ...state,
          accountAge: action.age
        }
        default:
        return state
    }
  }

export default user
  
const initialRegisterState = {}

export const registerUser = (state = initialRegisterState, action) => {
    switch (action.type) {
      //in case of register action called
      case 'REGISTER':
      //return this info and put into state
        return {
          //don't need to include state becuase its empty anyway which seems to cause a problem
          // ...state,
            username: action.username,
            firstname: action.firstname,
            email: action.email,
            password: action.password
          }
        default:
        return state
    }
  }

export default registerUser
  
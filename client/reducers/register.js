const initialRegisterState = []

export const registerUser = (state = initialRegisterState, action) => {
    switch (action.type) {
      //in case of register action called
      case 'REGISTER':
      //return this info and put into state
        return action.user
          //don't need to include state becuase its empty which seems to cause a problem
        default:
        return state
    }
  }

export default registerUser
  
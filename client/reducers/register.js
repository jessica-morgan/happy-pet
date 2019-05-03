const initialRegisterState = [{
  user: ''
}]


export const registerUser = (state = initialRegisterState, action) => {
    switch (action.type) {
      //in case of register action called
      case 'REGISTER':
      //return this info and put into state
      return {
       user: action.user
      }
      case 'INITIALISE_REGISTER_DATA':
          return {
            initialRegisterState
          }
          //don't need to include state becuase its empty which seems to cause a problem
        default:
        return state
  }
}
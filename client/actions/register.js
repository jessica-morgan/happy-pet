
export const register = (user) => {
    return {
      //if action register is called
      type: 'REGISTER',
      //return this
      user
    }
  }

  export const initialiseRegisterData = () => {
    return {
      type: 'INITIALISE_REGISTER_DATA'
    }
  }
  
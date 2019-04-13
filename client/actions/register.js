
export const register = (user) => {
    return {
      //if action register is called
      type: 'REGISTER',
      //return this
      user
    }
  }

  
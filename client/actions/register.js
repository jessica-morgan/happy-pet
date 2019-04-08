//action takes a username, email and password from the handleSubmit in register which gets
//info from state and dispatches it
export const register = (username, email, password) => {
    return {
      //if action register is called
      type: 'REGISTER',
      //return this
      username,
      email,
      password
    }
  }

  
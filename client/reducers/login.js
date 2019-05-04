const initialLoginState = []

export const login = (state = initialLoginState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
        return {
            username: action.username,
            password: action.password,
            loggedin: true
        }
        case 'INITIALISE_LOGIN_DATA':
        return {
            initialLoginState
        }
        default:
        return state
    }
}

export default login
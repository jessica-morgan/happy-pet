const initialLoginState = []

export const login = (state = initialLoginState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
        return {
            username: action.username,
            password: action.password,
            loggedin: true
        }
        case 'LOGOUT':
        return {
            username: action.username,
            loggedin: false
        }
        default:
        return state
    }
}

export default login
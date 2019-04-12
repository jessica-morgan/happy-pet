const initialLoginState = {}



export const login = (state = initialLoginState, action) => {
    switch (action.type) {
        case 'LOGIN':
        return {
            username: action.username,
            password: action.password
        }
        case 'LOGGED_IN':
        return {
            username: action.username,
            loggedin: true
        }
        default:
        return state
    }
}



export default login
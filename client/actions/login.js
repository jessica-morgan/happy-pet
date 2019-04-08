export const register = (username, password) => {
    return {
        type: 'LOGIN',
        username,
        password
    }
}
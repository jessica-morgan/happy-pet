import {getUsersPetApi} from '../api/users'

//get petinfo via api and dispatch to petInfo action
export function getUsersPetInfo (username) {
    return function (dispatch) {
      getUsersPetApi(username)
        .then(res => {
              return dispatch(petInfo(res[0].username, res[0].petType, res[0].petName, res[0].habitat, res[0].activity)) 
        })
    }
}

export const petInfo = (username, petType, petName, habitat, activity) => {
    return {
        type: 'PET_INFO',
        username,
        petType,
        petName,
        habitat,
        activity
    }
}
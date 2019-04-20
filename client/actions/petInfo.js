import {getUsersPetApi} from '../api/users'
import { petImageApi } from '../api/pets';

//get petinfo via api and dispatch to petInfo action
export function getUsersPetInfo (username) {
    return function (dispatch) {
      getUsersPetApi(username)
        .then(res => {
              return dispatch(petInfo(res[0].username, res[0].petType, res[0].petName, res[0].habitat, res[0].activity, res[0].fed, res[0].last_fed)) 
        })
    }
}
//returns image url according to pettype
export function getPetImage (pettype) {
    return function(dispatch) {
        petImageApi(pettype)
        .then(res => {
            return dispatch(petImg(res))
        })
    }
}


export const petInfo = (username, petType, petName, habitat, activity, fed, lastFed) => {
    return {
        type: 'PET_INFO',
        username,
        petType,
        petName,
        habitat,
        activity,
        fed,
        lastFed
    }
}

export const petImg = (petImgUrl) => {
    return {
        type: 'PET_IMG',
        petImgUrl
    }
}

export const petHunger = (bool) => {
    return {
        type: 'PET_HUNGER',
        bool
    }
}
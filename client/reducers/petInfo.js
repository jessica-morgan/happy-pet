const initialPetState = {
    owner: '',
    petType: '',
    petName: '',
    habitat: '',
    activity: '',
    fed: false,
    lastFed: '',
    petImage: '',
    hunger: false,
    petCreated: '',
    petAge: null
 }

export const getPetInfo = (state = initialPetState, action) => {
    switch (action.type) {
        case 'PET_INFO':
        return {
           ...state,
           owner: action.username,
           petType: action.petType,
           petName: action.petName,
           habitat: action.habitat,
           activity: action.activity,
           fed: action.fed,
           lastFed: action.lastFed,
           petCreated: action.petCreated
        }
        case 'PET_IMG':
        return {
            ...state,
            petImage: action.petImgUrl
        }
        case 'PET_HUNGER':
        return {
            ...state,
            hunger: action.bool
        }
        case 'PET_CREATED':
        return {
            ...state,
            petCreated: action.date
        }
        case 'PET_AGE':
        return {
            ...state,
            petAge: action.age
        }
        case 'INITIALISE_PET_DATA':
        return {
            initialPetState
        }
        default:
        return state
    }
}



export default getPetInfo
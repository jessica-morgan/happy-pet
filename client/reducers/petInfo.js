const initialPetState = [{
    owner: '',
    petType: '',
    petName: '',
    habitat: '',
    activity: '',
    fed: false,
    lastFed: '',
    petImage: '',
    hunger: false
 }]

export const getPetInfo = (state = initialPetState, action) => {
    switch (action.type) {
        case 'PET_INFO':
        return {
           owner: action.username,
           petType: action.petType,
           petName: action.petName,
           habitat: action.habitat,
           activity: action.activity,
           fed: action.fed,
           lastFed: action.lastFed
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
        default:
        return state
    }
}



export default getPetInfo
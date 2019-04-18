const initialPetState = [{
    owner: '',
    petType: '',
    petName: '',
    habitat: '',
    activity: '',
    fed: false,
    petImage: ''
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
           fed: action.fed
        }
        case 'PET_IMG':
        return {
            ...state,
            petImage: action.petImgUrl
        }
        default:
        return state
    }
}



export default getPetInfo
const initialPetState = []

export const getPetInfo = (state = initialPetState, action) => {
    switch (action.type) {
        case 'PET_INFO':
        return {
           owner: action.username,
           petType: action.petType,
           petName: action.petName,
           habitat: action.habitat,
           activity: action.activity
        }
        default:
        return state
    }
}

export default getPetInfo
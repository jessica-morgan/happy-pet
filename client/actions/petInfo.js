export const petInfo = (petType, petName, habitat, activity) => {
    return {
        type: 'PET_INFO',
        petType,
        petName,
        habitat,
        activity
    }
}
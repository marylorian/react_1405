export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'

export const changeName = (newName) => {
    return {
        type: CHANGE_NAME,
        payload: newName
    }
}

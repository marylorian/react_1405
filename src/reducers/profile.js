import {CHANGE_NAME} from "../actions/profile";

const initialState = {
    age: 27,
    name: 'John Doe'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

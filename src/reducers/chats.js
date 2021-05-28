import {ADD_CHAT} from "../actions/chats";

const initialState = {
    list: []
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: `id${state.list.length}`,
                        title: action.payload.title
                    }
                ]
            }
        default:
            return state
    }
}
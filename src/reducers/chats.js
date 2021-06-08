import {ADD_CHAT, CHANGE_BLINKING} from "../actions/chats";

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
        case CHANGE_BLINKING:
            return {
                ...state,
                list: state.list.map(chat => {
                    if (chat.id === action.payload.chatId) {
                        return {
                            ...chat,
                            isBlinking: action.payload.isBlinking
                        }
                    }

                    return chat
                })
            }
        default:
            return state
    }
}
export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const CHANGE_BLINKING = 'CHATS::CHANGE_BLINKING'

export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        payload: {
            title
        }
    }
}

export const changeChatBlinking = ({ chatId, isBlinking }) => {
    return {
        type: CHANGE_BLINKING,
        payload: {
            chatId,
            isBlinking
        }
    }
}

export const addChatThunk = (title) => {
    return async function (dispatch) {
        dispatch(addChat(title))
    }
}

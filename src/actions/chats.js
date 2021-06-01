export const ADD_CHAT = 'CHATS::ADD_CHAT'

export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        payload: {
            title
        }
    }
}

export const addChatThunk = (title) => {
    return async function (dispatch) {
        dispatch(addChat(title))
    }
}

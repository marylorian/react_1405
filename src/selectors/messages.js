export const selectMessagesByChatId = (state, { chatId }) => {
    return state.messages[chatId] || []
}
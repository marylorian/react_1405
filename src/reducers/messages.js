import {SENDERS} from "../constants";
import {ADD_MESSAGE} from "../actions/messages";

const initialState = {
    'chat-id': [
        { text: 'Hello', sender: SENDERS.ME }
    ],
    'chat-id-1': [
        { text: 'Hello-1', sender: SENDERS.ME }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.payload.chatId]: [
                    ...(state[action.payload.chatId] || []),
                    action.payload.message
                ]
            }
        default:
            return state
    }
}

function ex () {
    return {
        // 'chat-id': [
        //     { text: 'Hello', sender: SENDERS.ME }
        // ],
        'chat-id-1': [
            { text: 'Hello-1', sender: SENDERS.ME }
        ],
        'chat-id': [
            { text: 'Hello', sender: SENDERS.ME },
            // new message
        ]
    }
}
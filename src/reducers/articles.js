import {ADD_ARTICLES, ARTICLES_REQUEST_IDLE, ARTICLES_REQUEST_FAILED, ARTICLES_REQUEST_STARTED, ARTICLES_REQUEST_SUCCESS} from "../actions/articles";
import {ARTICLES_STATUS} from "../constants";

const initialState = {
    list: [],
    requestStatus: ARTICLES_STATUS.IDLE
}

export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLES:
            return {
                ...state,
                list: [
                    // ...state.list,
                    ...action.payload
                ]
            }
        case ARTICLES_REQUEST_IDLE:
        case ARTICLES_REQUEST_SUCCESS:
        case ARTICLES_REQUEST_STARTED:
        case ARTICLES_REQUEST_FAILED:
            return {
                ...state,
                requestStatus: action.payload
            }
        default:
            return state
    }
}
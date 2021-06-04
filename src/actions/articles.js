import {API_URL, ARTICLES_STATUS} from "../constants";
import transport from "../services/transport";

export const ADD_ARTICLES = 'ARTICLES::ADD_ARTICLES'
export const ARTICLES_REQUEST_IDLE = 'ARTICLES::ARTICLES_REQUEST_IDLE'
export const ARTICLES_REQUEST_STARTED = 'ARTICLES::ARTICLES_REQUEST_STARTED'
export const ARTICLES_REQUEST_FAILED = 'ARTICLES::ARTICLES_REQUEST_FAILED'
export const ARTICLES_REQUEST_SUCCESS = 'ARTICLES::ARTICLES_REQUEST_SUCCESS'

export const addArticles = (articleList) => {
    return {
        type: ADD_ARTICLES,
        payload: articleList
    }
}

export const setRequestStatusIdle = () => ({
    type: ARTICLES_REQUEST_IDLE,
    payload: ARTICLES_STATUS.IDLE
})
export const setRequestStatusStarted = () => ({
    type: ARTICLES_REQUEST_STARTED,
    payload: ARTICLES_STATUS.STARTED
})
export const setRequestStatusSuccess = () => ({
    type: ARTICLES_REQUEST_SUCCESS,
    payload: ARTICLES_STATUS.SUCCESS
})
export const setRequestStatusFailed = () => ({
    type: ARTICLES_REQUEST_FAILED,
    payload: ARTICLES_STATUS.FAILED
})

export const fetchArticles = () => {
    return async (dispatch, getState) => {
        dispatch(setRequestStatusStarted())

        fetch(API_URL)
            .then((response) => {
                console.log(response.status)

                if (response.status !== 200) {
                    console.log(response.status)
                    throw Error('Articles are not ok ;(')
                }

                return response.json()
            })
            .then((data) => {
                dispatch(setRequestStatusSuccess())
                dispatch(addArticles(data))
                dispatch(setRequestStatusIdle())
            })
            .catch(err => {
                dispatch(setRequestStatusFailed())
                dispatch(setRequestStatusIdle())
                console.error('catched! ', err)
            })
    }
}

export const fetchArticlesAxios = () => {
    return async (dispatch, getState) => {
        dispatch(setRequestStatusStarted())

        try {
            const { data } = await transport.get(API_URL)

            dispatch(setRequestStatusSuccess())
            dispatch(addArticles(data))
            dispatch(setRequestStatusIdle())
        } catch (err) {
            dispatch(setRequestStatusFailed())
            dispatch(setRequestStatusIdle())
            console.error('catched by axios! ', err)
        }

        // transport.get(API_URL)
        //     .then(({ data }) => {
        //         dispatch(setRequestStatusSuccess())
        //         dispatch(addArticles(data))
        //         dispatch(setRequestStatusIdle())
        //     })
        //     .catch(err => {
        //         dispatch(setRequestStatusFailed())
        //         dispatch(setRequestStatusIdle())
        //         console.error('catched by axios! ', err)
        //     })
    }
}
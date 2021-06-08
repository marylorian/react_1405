import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {profileReducer} from "./reducers/profile";
import {chatsReducer} from "./reducers/chats";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import {articlesReducer} from "./reducers/articles";
import {messagesReducer} from "./reducers/messages";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    articles: articlesReducer,
    messages: messagesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
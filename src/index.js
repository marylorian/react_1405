import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from "./components/Router/Router";
import {Provider} from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// Object.keys(this.props.messages).length
// Object.value(this.props.messages).length

// messages = [], [1,2,3] messages.length - 3
// chats: { chatId: id, list: [] }
// chats: {
//   id1: ['Hello', 'Hi']
//   id2: ['How r u', 'Bye']
// }

// Object.keys(chats) => ['id1', 'id2']
// Object.values(chats) => [['Hello', 'Hi'], ['How r u', 'Bye']]

// Object.keys(chats).length => 2
// Object.values(chats).map(messageFromChat => <div>{messageFromChat}</div>) => список сообщений из каждого чата

// messages = { chatId: [] }
// chat = { created, isDeleted, title, id }

// messages: {
//   id1: ['Hello', 'Hi']
//   id2: ['How r u', 'Bye']
// }

// messages[props.chatId].map(...)
// messages.id1
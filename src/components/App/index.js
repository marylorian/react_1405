import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

// mysite.ru/images/index - BrowserRouter
// mysite.ru#images-page - HashRouter

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="app__title">React App - BrowserRouter</h1>

                <Link to="/chat">Link to chat</Link>
                <Link to="/profile">Link to profile</Link>
                <Link to="/">Link to home page</Link>

                <Link to="/chat/1"><b>Chat 1</b></Link>
                <Link to="/chat/2"><b>Chat 2</b></Link>
            </div>
        );
    }
}

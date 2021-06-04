import React from 'react'
import './App.css';
import Header from "../Header";
import Router from "../Router/Router";

export default class App extends React.Component {
    componentDidMount() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const rand = Math.round(Math.random() * 100)

                if (rand % 2 === 0) {
                    resolve();
                } else {
                    reject();
                }
            }, 1000)
        })

        // success = fullfilled
        // failed = rejected
        promise
            .then(() => console.log('success'))
            .catch(err => console.log('error', err))

        promise
            .then(
                () => console.log('!!success'),
                () => console.log('!!error')
            )
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__content">
                    <Router />
                </div>
            </div>
        );
    }
}

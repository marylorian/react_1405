import React from "react";
import {Route, Switch} from "react-router";
import App from "../App";
import '../App/App.css'
import { ChatClassComponent, ChatFunctionComponent } from "../Chat";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/chat" render={
                    () => <span>Chat url</span>
                } />

                <Route path="/chat/:id" render={
                    () => <React.Fragment>
                        <ChatFunctionComponent />

                        <ChatClassComponent />
                    </React.Fragment>
                } />

                <Route path="/profile">
                    <span>Profile url</span>
                </Route>

                <Route exact path="/" component={App} />

                <Route>
                    <span>I don't know this url</span>
                </Route>
            </Switch>
        )
    }
}
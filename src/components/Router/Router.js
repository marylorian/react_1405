import React from "react";
import {Route, Switch} from "react-router";
import App from "../App";
import '../App/App.css'
import { ChatClassComponent, ChatFunctionComponent } from "../Chat";
import { ProfileClassComponentConnected as ProfileClassComponent, ProfileFunctionComponent } from "../Profile";
import Chats from "../Chats";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                {/* Content as component prop */}
                <Route exact path="/chat" component={Chats} />

                {/* Content as render function */}
                <Route path="/chat/:id" render={
                    () => <React.Fragment>
                        <ChatFunctionComponent />
                        <ChatClassComponent />
                    </React.Fragment>
                } />

                {/* Content as children */}
                <Route path="/profile">
                    <ProfileFunctionComponent />
                    <ProfileClassComponent />
                </Route>

                <Route exact path="/" component={App} />

                <Route>
                    <span>I don't know this url</span>
                </Route>
            </Switch>
        )
    }
}
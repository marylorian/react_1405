import React from "react";
import {Route, Switch} from "react-router";
import '../App/App.css'
import { ChatClassComponent, ChatFunctionComponent } from "../Chat";
import { ProfileClassComponentConnected as ProfileClassComponent, ProfileFunctionComponent } from "../Profile";
import Chats from "../Chats";
import Home from "../Home";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                {/* Content as component prop */}
                <Route exact path="/chat" component={Chats} />

                {/* Content as render function */}
                <Route path="/chat/:id" render={
                    ({ match }) => {
                        return <React.Fragment>
                            <ChatFunctionComponent />
                            <ChatClassComponent chatId={match.params.id}/>
                        </React.Fragment>
                    }
                } />

                {/* Content as children */}
                <Route path="/profile">
                    <ProfileFunctionComponent />
                    <ProfileClassComponent />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route>
                    <span>I don't know this url</span>
                </Route>
            </Switch>
        )
    }
}
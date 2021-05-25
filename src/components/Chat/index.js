import React from "react";
import Input from "../Input/Input";
import {SENDERS} from "../../constants";
import usePrevious from "../../utils/usePrevious";
import { useParams } from 'react-router-dom'

/*  FUNCTION COMPONENT */

export const ChatFunctionComponent = (props) => {
    const [messages, setMessages] = React.useState([])
    const prevMessages = usePrevious(messages)
    const params = useParams()
    const timer = React.useRef(null)

    const handleAddMessage = React.useCallback((newMessage) => {
        setMessages(prevState => {
            return [ ...prevState, newMessage ]
        })
    }, [])

    React.useEffect(() => {
        if (
            prevMessages &&
            prevMessages.length < messages.length &&
            messages[messages.length - 1].sender === SENDERS.ME
        ) {
            timer.current = setTimeout(() => {
                handleAddMessage({
                    text: "I am robot",
                    sender: SENDERS.BOT
                })
            }, 1000)
        }
    }, [messages, prevMessages, handleAddMessage])

    React.useEffect(() => {
        return () => {
            console.log('willUnmount')
            clearTimeout(timer.current)
        }
    }, [])

    return <div className="child__bordered">
        <span>function component, with id {params.id}</span>

        {messages.map(
            messageItem => (
                <div className="message-item">
                    <span>{messageItem.sender}: {messageItem.text}</span>
                </div>
            )
        )}

        <Input formId="1" onAddMessage={handleAddMessage} />
    </div>
}

/* CLASS COMPONENT */

export class ChatClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { messages: [] }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length - 1].sender === SENDERS.ME
        ) {
            this.timer = setTimeout(() => {
                this.handleAddMessage({
                    text: "I am robot",
                    sender: SENDERS.BOT
                })
            }, 1000)
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleAddMessage = (newMessage) => {
        this.setState(prevState => {
            return { messages: [ ...prevState.messages, newMessage ] }
        })
    }

    render() {
        return <div className="child__bordered">
            <span>class component</span>

            {this.state.messages.map(
                messageItem => (
                    <div className="message-item">
                        <span>{messageItem.sender}: {messageItem.text}</span>
                    </div>
                )
            )}

            <Input formId="2" onAddMessage={this.handleAddMessage} />
        </div>
    }
}
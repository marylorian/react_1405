import React from "react";
import Input from "../Input/Input";
import {SENDERS} from "../../constants";
import usePrevious from "../../utils/usePrevious";
import { useParams } from 'react-router-dom'
import {connect, useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../actions/messages";
import {selectMessagesByChatId} from "../../selectors/messages";

/*  FUNCTION COMPONENT */

export const ChatFunctionComponent = (props) => {
    const { id: chatId } = useParams()
    const timer = React.useRef(null)

    const messages = useSelector(state => selectMessagesByChatId(state, { chatId }))
    const dispatch = useDispatch()

    const prevMessages = usePrevious(messages)

    const handleAddMessage = React.useCallback((newMessage) => {
        dispatch(addMessage({ message: newMessage, chatId }))
    }, [])

    React.useEffect(() => {
        if (
            prevMessages &&
            prevMessages.length < messages.length &&
            messages[messages.length - 1].sender === SENDERS.ME
        ) {
            timer.current = setTimeout(() => {
                dispatch(
                    addMessage({
                        message: {
                            text: "I am robot",
                            sender: SENDERS.BOT
                        },
                        chatId
                    })
                )
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
        <span>function component, with id {chatId}</span>

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

export class ChatClassComponentPure extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.messages.length < this.props.messages.length &&
            this.props.messages[this.props.messages.length - 1].sender === SENDERS.ME
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
        this.props.addMessage({
            message: newMessage,
            chatId: this.props.chatId
        })
    }

    render() {
        const { messages, chatId } = this.props

        return <div className="child__bordered">
            <span>class component with id {chatId}</span>

            {messages.map(
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

const mapStateToProps = (state, ownProps) => {
    return {
        messages: selectMessagesByChatId(state, { chatId: ownProps.chatId })
    }
}

const mapDispatchToProps = {
    addMessage
}

export const ChatClassComponent = connect(mapStateToProps, mapDispatchToProps)(ChatClassComponentPure)
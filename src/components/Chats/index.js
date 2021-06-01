import React, {useCallback, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {addChat, addChatThunk} from "../../actions/chats";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import TextField from "@material-ui/core/TextField";

const ChatListFunctionComponent = props => {
    const [newChatName, setNewChatName] = useState('')

    const chats = useSelector(state => state.chats)
    const dispatch = useDispatch()

    const handleChangeChatName = useCallback(event => {
        setNewChatName(event.target.value)
    }, [])

    const handleAddChat = useCallback(() => {
        dispatch(addChatThunk(newChatName))
    }, [dispatch, newChatName])

    return <div className="child__bordered">
        <p>ChatList Function Component</p>

        <TextField
            id="text-field"
            className="child__text-field"
            label="Мое текстовое поле"
            placeholder="Мой плейсхолдер"
            variant="outlined"
            value={newChatName}
            onChange={handleChangeChatName}
        />
        <button className="app__button" onClick={handleAddChat}>Добавить чат</button>

        {chats.list.map(chatItem => (
            <div key={chatItem.id}>
                <Link to={`/chat/${chatItem.id}`}>
                    <span>{chatItem.title}</span>
                </Link>
            </div>
        ))}
    </div>
}

class ChatListClassComponent extends React.Component {
    state = {
        newChatName: ''
    }

    handleChangeChatName = event => {
        this.setState({ newChatName: event.target.value })
    }

    handleAddChat = () => {
        const { addChat } = this.props
        const { newChatName } = this.state

        addChat(newChatName)
    }

    render() {
        const { chats } = this.props

        return <div className="child__bordered">
            <p>ChatList Class Component</p>

            <TextField
                id="text-field"
                className="child__text-field"
                label="Мое текстовое поле"
                placeholder="Мой плейсхолдер"
                variant="outlined"
                value={this.state.newChatName}
                onChange={this.handleChangeChatName}
            />
            <button className="app__button" onClick={this.handleAddChat}>Добавить чат</button>

            {chats.list.map(chatItem => (
                <div key={chatItem.id}>
                    <Link to={`/chat/${chatItem.id}`}>
                        <span>{chatItem.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    }
}

const mapStateToProps = state => ({
    chats: state.chats,
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addChat
        },
        dispatch
    )

const ChatListClassComponentConnected = connect(mapStateToProps, mapDispatchToProps)(ChatListClassComponent)

const Chats = () => (
    <>
        <ChatListFunctionComponent />
        <ChatListClassComponentConnected />
    </>
)

export default Chats
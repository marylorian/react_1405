import React from 'react'
import logo from './logo.svg';
import './App.css';

const Button = (props) => {
    const { text, handleClick } = props

    return <button onClick={handleClick}>{text}</button>
}

const MessagesWrapper = props => {
    return props.messages.map((messageItem, index) => <div key={index}>{messageItem}</div>)
}

function App() {
  let [messages, setMessages] = React.useState(["Hello!"])

  const onButtonClick = () => {
      console.log('clicked!', { messages })

      setMessages([...messages, 'Hello again!'])
  }

  return (
    <div className="App">
        <MessagesWrapper messages={messages} />
        <button onClick={onButtonClick}>My button</button>
    </div>
  );
}

export default App;
